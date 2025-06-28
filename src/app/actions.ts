'use server';

import { assessTransactionRisk, TransactionRiskAssessmentInput, TransactionRiskAssessmentOutput } from '@/ai/flows/transaction-risk-assessment';
import { z } from 'zod';

const SendMoneySchema = z.object({
  amount: z.coerce.number().positive('Amount must be positive'),
  recipient: z.string().min(1, 'Recipient is required'),
});

export async function handleSendMoney(formData: FormData): Promise<TransactionRiskAssessmentOutput | { error: string }> {
  const rawFormData = {
    amount: formData.get('amount'),
    recipient: formData.get('recipient'),
  };

  const validatedFields = SendMoneySchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.toString(),
    };
  }

  const { amount, recipient } = validatedFields.data;

  try {
    const transactionDetails: TransactionRiskAssessmentInput = {
      transactionAmount: amount,
      senderPhoneNumber: '+15551234567', // Mock data
      recipientPhoneNumber: recipient, // Using recipient from form
      timeOfTransaction: new Date().toISOString(),
      senderAccountAgeDays: 365, // Mock data
      recipientAccountAgeDays: Math.floor(Math.random() * 500) + 1, // Mock data
      transactionHistoryWithRecipient: 'No recent transactions.', // Mock data
    };

    // Add a slight delay to simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    const assessment = await assessTransactionRisk(transactionDetails);
    return assessment;
  } catch (e) {
    console.error(e);
    return {
      error: 'Failed to assess transaction risk. Please try again later.',
    };
  }
}
