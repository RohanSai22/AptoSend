
'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Send } from 'lucide-react';
import { handleSendMoney } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RiskAssessmentDialog } from './risk-assessment-dialog';
import type { TransactionRiskAssessmentOutput } from '@/ai/flows/transaction-risk-assessment';
import { useToast } from '@/hooks/use-toast';
import { Transaction } from './transaction-history';

const SendMoneySchema = z.object({
  amount: z.coerce.number().positive({ message: 'Please enter a valid amount.' }).min(1, { message: 'Amount must be at least $1.' }),
  recipient: z.string().min(10, { message: 'Please enter a valid phone number.' }),
});

type FormData = z.infer<typeof SendMoneySchema>;

interface SendMoneyFormProps {
  onTransactionComplete: (transaction: Omit<Transaction, 'id' | 'date'>) => void;
}

export function SendMoneyForm({ onTransactionComplete }: SendMoneyFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [assessment, setAssessment] = useState<TransactionRiskAssessmentOutput | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [confirmedTxData, setConfirmedTxData] = useState<FormData | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(SendMoneySchema),
    defaultValues: {
      amount: 100,
      recipient: '+15559876543',
    },
  });

  const amount = form.watch('amount');
  const fee = amount ? (amount * 0.01).toFixed(2) : '0.00';
  const recipientGets = amount ? (amount - parseFloat(fee)).toFixed(2) : '0.00';

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    setAssessment(null);
    setConfirmedTxData(data);
    
    const formData = new FormData();
    formData.append('amount', String(data.amount));
    formData.append('recipient', data.recipient);

    const result = await handleSendMoney(formData);

    setIsLoading(false);
    
    if ('error' in result) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error,
      });
      setConfirmedTxData(null);
    } else {
      setAssessment(result);
      setIsDialogOpen(true);
    }
  }

  const handleConfirmTransaction = () => {
    if (assessment && confirmedTxData) {
       onTransactionComplete({
        type: 'sent',
        recipient: confirmedTxData.recipient,
        amount: `$${confirmedTxData.amount.toFixed(2)}`,
        status: assessment.actionToTake === 'Approve' ? 'Completed' : 'In Review',
        riskScore: assessment.riskScore,
      });
    }
    console.log("Transaction confirmed and executed.");
    form.reset();
    setConfirmedTxData(null);
  };

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Send Money</CardTitle>
          <CardDescription>Enter transaction details below. All transactions are protected by our AI Fraud Shield.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="recipient"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient's Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 555-555-5555" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount to Send (USD)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                        <Input type="number" placeholder="100.00" className="pl-7" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Card className="bg-muted/50">
                <CardContent className="p-4 space-y-2 text-sm">
                  <div className="flex justify-between"><span>Fee (1%):</span> <span className="font-medium">${fee}</span></div>
                  <div className="flex justify-between font-semibold text-base"><span>Recipient receives:</span> <span>${recipientGets}</span></div>
                </CardContent>
              </Card>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Send className="mr-2 h-4 w-4" />
                )}
                {isLoading ? 'Analyzing Transaction...' : 'Send Money'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      <RiskAssessmentDialog
        assessment={assessment}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onConfirm={handleConfirmTransaction}
      />
    </>
  );
}
