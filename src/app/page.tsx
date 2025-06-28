
import { Button } from "@/components/ui/button"
import { Shield, Rocket, Globe } from "lucide-react"
import Link from 'next/link'
import { WalletCards } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <WalletCards className="h-6 w-6 text-primary" />
            <span className="font-bold inline-block">AptoSend</span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Seamlessly Send Money, Secured by AI
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              AptoSend is the future of international remittance. Experience instant transfers, blockchain settlement, and unparalleled security with our AI Fraud Shield.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/login">Send Money Now</Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-32 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Why Choose AptoSend?</h2>
              <p className="text-muted-foreground mt-2">The trusted way to send money across borders.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI Fraud Shield</h3>
                <p className="mt-2 text-muted-foreground">Our cutting-edge AI analyzes every transaction to detect and prevent fraud before it happens, keeping your money safe.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Rocket className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Blockchain Settlement</h3>
                <p className="mt-2 text-muted-foreground">Leveraging the power of USDC on Aptos and Solana for fast, low-cost, and transparent transaction settlements.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Global Reach, Local Feel</h3>
                <p className="mt-2 text-muted-foreground">Send money via phone number and have your recipient notified in their local currency, making international transfers feel local.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 md:px-8 md:py-8 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by AptoSend.
          </p>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} AptoSend Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
