import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { University, CreditCard } from "lucide-react";

export function LinkedAccounts() {
  const accounts = [
    { id: 1, name: "Chase Bank", details: "**** 1234", icon: <University className="h-6 w-6 text-primary" /> },
    { id: 2, name: "UPI", details: "user@oksbi", icon: <CreditCard className="h-6 w-6 text-primary" /> },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Linked Accounts</CardTitle>
        <CardDescription>Your connected payment methods.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {accounts.map(account => (
          <div key={account.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-4">
              {account.icon}
              <div>
                <p className="font-semibold">{account.name}</p>
                <p className="text-sm text-muted-foreground">{account.details}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm">Manage</Button>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex-col sm:flex-row gap-2">
        <Button variant="outline" className="w-full">Link with Plaid</Button>
        <Button variant="outline" className="w-full">Link with UPI</Button>
      </CardFooter>
    </Card>
  );
}
