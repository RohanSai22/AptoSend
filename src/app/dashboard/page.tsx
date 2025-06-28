
'use client';

import { useState } from "react";
import { SendMoneyForm } from "@/components/send-money-form";
import { LinkedAccounts } from "@/components/linked-accounts";
import { TransactionHistory, Transaction } from "@/components/transaction-history";
import { TransactionNetworkGraph } from "@/components/transaction-network-graph";

const initialTransactions: Transaction[] = [
  { id: 1, type: "sent", recipient: "+15550001111", amount: "$50.00", date: "2 days ago", status: "Completed", riskScore: 0.1 },
  { id: 2, type: "received", recipient: "Bob", amount: "$200.00", date: "3 days ago", status: "Completed", riskScore: 0.05 },
  { id: 3, type: "sent", recipient: "+15552223333", amount: "$1,250.00", date: "5 days ago", status: "In Review", riskScore: 0.6 },
  { id: 4, type: "sent", recipient: "+15554445555", amount: "$30.00", date: "1 week ago", status: "Failed", riskScore: 0.9 },
];


export default function DashboardPage() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const handleAddTransaction = (newTransaction: Omit<Transaction, 'id' | 'date'>) => {
    const tx: Transaction = {
      ...newTransaction,
      id: Date.now(),
      date: 'Just now',
    };
    setTransactions(prev => [tx, ...prev]);
  };

  return (
    <main className="flex-1 p-4 md:p-8 space-y-8">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <SendMoneyForm onTransactionComplete={handleAddTransaction} />
          <TransactionNetworkGraph transactions={transactions.filter(t => t.type === 'sent')} />
        </div>
        <div className="space-y-8">
          <LinkedAccounts />
          <TransactionHistory transactions={transactions} />
        </div>
      </div>
    </main>
  );
}
