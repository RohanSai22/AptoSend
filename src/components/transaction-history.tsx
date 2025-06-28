import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

export function TransactionHistory() {
  const transactions = [
    { id: 1, type: "sent", recipient: "Alice", amount: "$50.00", date: "2 days ago", status: "Completed" },
    { id: 2, type: "received", recipient: "Bob", amount: "$200.00", date: "3 days ago", status: "Completed" },
    { id: 3, type: "sent", recipient: "Charlie", amount: "$1,250.00", date: "5 days ago", status: "In Review" },
    { id: 4, type: "sent", recipient: "David", amount: "$30.00", date: "1 week ago", status: "Failed" },
  ];

  const getStatusBadgeVariant = (status: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (status) {
      case "Completed":
        return "default";
      case "In Review":
        return "secondary";
      case "Failed":
        return "destructive";
      default:
        return "outline";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest transaction history.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Recipient</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map(tx => (
              <TableRow key={tx.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={cn("h-8 w-8 rounded-full flex items-center justify-center", tx.type === 'sent' ? 'bg-primary/10' : 'bg-green-500/10')}>
                      {tx.type === 'sent' ? 
                        <ArrowUpRight className="h-4 w-4 text-primary" /> : 
                        <ArrowDownLeft className="h-4 w-4 text-green-500" />
                      }
                    </div>
                    <span className="font-medium">{tx.recipient}</span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono">{tx.amount}</TableCell>
                <TableCell className="hidden sm:table-cell text-muted-foreground">{tx.date}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={getStatusBadgeVariant(tx.status)} className={cn(
                    getStatusBadgeVariant(tx.status) === 'default' && 'bg-green-500/80',
                  )}>{tx.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
