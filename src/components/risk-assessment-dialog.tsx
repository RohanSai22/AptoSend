
'use client';

import type { TransactionRiskAssessmentOutput } from '@/ai/flows/transaction-risk-assessment';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { ShieldAlert, ShieldCheck, ShieldQuestion } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface RiskAssessmentDialogProps {
  assessment: TransactionRiskAssessmentOutput | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
}

export function RiskAssessmentDialog({ assessment, open, onOpenChange, onConfirm }: RiskAssessmentDialogProps) {
  const { toast } = useToast();

  if (!assessment) return null;

  const { riskScore, reason, actionToTake } = assessment;
  const riskPercentage = Math.round(riskScore * 100);

  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
    toast({
      title: "Transaction Sent!",
      description: "Your money is on its way.",
    });
  };
  
  const getRiskColor = () => {
    if (riskPercentage > 75) return 'text-destructive';
    if (riskPercentage > 40) return 'text-accent';
    return 'text-green-500';
  };
  
  const getActionInfo = () => {
    switch (actionToTake) {
      case 'Approve':
        return {
          Icon: ShieldCheck,
          className: 'border-green-500 text-green-500',
        };
      case 'Review':
        return {
          Icon: ShieldQuestion,
          className: 'border-accent text-accent',
        };
      case 'Deny':
      default:
        return {
          Icon: ShieldAlert,
          className: 'border-destructive text-destructive',
        };
    }
  };

  const actionInfo = getActionInfo();
  const progressColorClass = riskPercentage > 75 ? '[&>div]:bg-destructive' : riskPercentage > 40 ? '[&>div]:bg-accent' : '[&>div]:bg-green-500';


  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            AI Fraud Shield Assessment
          </AlertDialogTitle>
          <AlertDialogDescription>
            Our advanced AI has analyzed this transaction for potential risks.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <Card className="border-none shadow-none bg-transparent">
          <CardContent className="p-0 grid gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <span className="text-sm font-medium text-muted-foreground">Risk Score</span>
                <span className={cn('font-bold text-xl', getRiskColor())}>
                  {riskPercentage}%
                </span>
              </div>
              <Progress value={riskPercentage} className={cn("h-3", progressColorClass)} />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-muted-foreground">Recommendation</h4>
              <Badge variant="outline" className={cn('text-base', actionInfo.className)}>
                <actionInfo.Icon className="h-4 w-4 mr-2" />
                {actionToTake}
              </Badge>
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-muted-foreground">AI-Generated Reason</h4>
              <p className="text-sm text-foreground/90 p-3 bg-muted/50 rounded-md border">{reason}</p>
            </div>
          </CardContent>
        </Card>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel Transaction</AlertDialogCancel>
          {actionToTake !== 'Deny' && (
             <Button onClick={handleConfirm} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {actionToTake === 'Approve' ? 'Confirm & Send' : 'Proceed Anyway'}
            </Button>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
