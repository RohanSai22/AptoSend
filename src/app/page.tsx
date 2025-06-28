
'use client';

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SendMoneyForm } from "@/components/send-money-form";
import { LinkedAccounts } from "@/components/linked-accounts";
import { TransactionHistory, Transaction } from "@/components/transaction-history";
import { TransactionNetworkGraph } from "@/components/transaction-network-graph";
import { WalletCards } from "lucide-react";

const initialTransactions: Transaction[] = [
  { id: 1, type: "sent", recipient: "+15550001111", amount: "$50.00", date: "2 days ago", status: "Completed", riskScore: 0.1 },
  { id: 2, type: "received", recipient: "Bob", amount: "$200.00", date: "3 days ago", status: "Completed", riskScore: 0.05 },
  { id: 3, type: "sent", recipient: "+15552223333", amount: "$1,250.00", date: "5 days ago", status: "In Review", riskScore: 0.6 },
  { id: 4, type: "sent", recipient: "+15554445555", amount: "$30.00", date: "1 week ago", status: "Failed", riskScore: 0.9 },
];


export default function Home() {
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
    <div className="flex min-h-screen w-full flex-col bg-background">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:px-8">
        <div className="flex items-center gap-2 text-lg font-semibold md:text-2xl">
          <WalletCards className="h-7 w-7 text-primary" />
          <span className="font-headline">AptoSend</span>
        </div>
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar>
                  <AvatarImage src="https://placehold.co/40x40.png" alt="User" data-ai-hint="person avatar" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
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
    </div>
  );
}
