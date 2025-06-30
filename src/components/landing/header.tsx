
'use client';

import { Button } from '@/components/ui/button';
import { WalletCards } from 'lucide-react';
import Link from 'next/link';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center mx-auto px-4">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <WalletCards className="h-7 w-7 text-primary" />
                <span className="font-bold text-xl inline-block">AptoSend</span>
            </Link>
            <div className="flex flex-1 items-center justify-end space-x-2">
                <nav className="flex items-center space-x-1">
                <Button variant="ghost" asChild>
                    <Link href="/login">Login</Link>
                </Button>
                <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                    <Link href="/login">Get Started</Link>
                </Button>
                </nav>
            </div>
            </div>
      </header>
    );
}
