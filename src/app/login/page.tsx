
'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { WalletCards } from "lucide-react"
import Link from 'next/link'
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd handle auth here.
    // For this prototype, we'll just redirect to the dashboard.
    router.push('/dashboard');
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md mx-auto p-4">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8 text-lg font-semibold md:text-2xl">
          <WalletCards className="h-7 w-7 text-primary" />
          <span className="font-headline">AptoSend</span>
        </Link>
        <Card>
          <CardHeader className="text-center">
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to your account to send money.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="user@aptosend.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <Button variant="outline" className="w-full" type="button" onClick={() => router.push('/dashboard')}>
                <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 381.5 512 244 512 111.8 512 0 400.2 0 264.1 0 128.2 103.5 16.5 244 16.5c70.3 0 129.8 28.7 173.4 74.2l-68.6 67.3c-23.7-22.5-54.8-38.3-90.8-38.3-74.5 0-135.3 63.3-135.3 140.8 0 77.5 60.8 140.8 135.3 140.8 88.3 0 112-64.3 115.6-96.6H244v-83.9h236.1c2.3 12.7 3.9 26.4 3.9 41.4z"></path></svg>
                Login with Google
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
