// This is an AI-powered fraud shield that assesses the risk of each transaction based on a risk score.
'use server';
/**
 * @fileOverview An AI agent for assessing the risk of a transaction.
 *
 * - assessTransactionRisk - A function that assesses the risk of a transaction.
 * - TransactionRiskAssessmentInput - The input type for the assessTransactionRisk function.
 * - TransactionRiskAssessmentOutput - The return type for the assessTransactionRisk function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TransactionRiskAssessmentInputSchema = z.object({
  transactionAmount: z.number().describe('The amount of the transaction.'),
  senderPhoneNumber: z.string().describe('The phone number of the sender.'),
  recipientPhoneNumber: z.string().describe('The phone number of the recipient.'),
  timeOfTransaction: z.string().describe('The time of the transaction.'),
  senderAccountAgeDays: z.number().describe('The age of the sender account in days.'),
  recipientAccountAgeDays: z.number().describe('The age of the recipient account in days.'),
  transactionHistoryWithRecipient: z.string().describe('A description of the transaction history between the sender and recipient.'),
});
export type TransactionRiskAssessmentInput = z.infer<typeof TransactionRiskAssessmentInputSchema>;

const TransactionRiskAssessmentOutputSchema = z.object({
  riskScore: z.number().describe('A score from 0 to 1 indicating the risk of the transaction, with 1 being the highest risk.'),
  reason: z.string().describe('The reasoning behind the risk score.'),
  actionToTake: z.string().describe('A recommendation for the action to take based on the risk score. Options are: Approve, Deny, Review.'),
});
export type TransactionRiskAssessmentOutput = z.infer<typeof TransactionRiskAssessmentOutputSchema>;

export async function assessTransactionRisk(input: TransactionRiskAssessmentInput): Promise<TransactionRiskAssessmentOutput> {
  return assessTransactionRiskFlow(input);
}

const prompt = ai.definePrompt({
  name: 'transactionRiskAssessmentPrompt',
  input: {schema: TransactionRiskAssessmentInputSchema},
  output: {schema: TransactionRiskAssessmentOutputSchema},
  prompt: `You are an AI fraud detection expert specializing in assessing the risk of financial transactions.

You will use the provided information about the transaction to determine a risk score from 0 to 1, where 1 is the highest risk. You will also provide a reason for the risk score and a recommendation for the action to take, which can be Approve, Deny, or Review.

Transaction Amount: {{{transactionAmount}}}
Sender Phone Number: {{{senderPhoneNumber}}}
Recipient Phone Number: {{{recipientPhoneNumber}}}
Time of Transaction: {{{timeOfTransaction}}}
Sender Account Age (Days): {{{senderAccountAgeDays}}}
Recipient Account Age (Days): {{{recipientAccountAgeDays}}}
Transaction History with Recipient: {{{transactionHistoryWithRecipient}}}

Based on this information, what is the risk score, the reason for the score, and the action to take?`,
});

const assessTransactionRiskFlow = ai.defineFlow(
  {
    name: 'assessTransactionRiskFlow',
    inputSchema: TransactionRiskAssessmentInputSchema,
    outputSchema: TransactionRiskAssessmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
