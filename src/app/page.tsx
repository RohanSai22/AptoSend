
import { Button } from "@/components/ui/button"
import { ShieldCheck, Rocket, Globe, Zap, Network } from "lucide-react"
import Link from 'next/link'
import { WalletCards } from "lucide-react";
import { GlobalAnomalyGraph } from "@/components/global-anomaly-graph";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <WalletCards className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl inline-block">AptoSend</span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center space-x-1">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/login">Get Started</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container text-center">
            <div className="bg-primary/10 inline-block p-3 rounded-full mb-6">
                <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              The Future of Global Remittance
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl">
              AptoSend revolutionizes how you send money across borders. Experience instant, low-cost transfers powered by blockchain and secured by our industry-leading AI Fraud Shield.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/login">Send Money Now</Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-24 bg-card">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose AptoSend?</h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">We've built a platform that is secure, fast, and fair. Your money, delivered with confidence.</p>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">AI Fraud Shield</h3>
                <p className="mt-2 text-muted-foreground">Our cutting-edge Graph Neural Network analyzes every transaction in real-time to detect and prevent fraud, keeping your funds safe.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Blockchain Settlement</h3>
                <p className="mt-2 text-muted-foreground">We leverage the power of USDC on Aptos and Solana for fast, low-cost, and transparent transaction settlements 24/7.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Global Reach, Local Feel</h3>
                <p className="mt-2 text-muted-foreground">Send money with just a phone number. Your recipient is notified in their local currency, making international transfers feel effortless.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
            <div className="container">
                <div className="text-center mb-16">
                    <div className="bg-primary/10 inline-block p-3 rounded-full mb-4">
                        <Network className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI-Powered Global Anomaly Detection</h2>
                    <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">
                        This is a live, anonymized visualization of our global transaction network. Our AI constantly monitors for unusual patterns, automatically flagging high-risk transfers (shown in yellow and red) to protect the entire ecosystem.
                    </p>
                </div>
                <div className="relative flex justify-center items-center -mt-8">
                   <GlobalAnomalyGraph />
                </div>
            </div>
        </section>
        
        <section id="mission" className="py-20 md:py-24 bg-card">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Vision for a Borderless Economy</h2>
              <p className="text-muted-foreground text-lg">
                We believe that moving money should be as simple as sending a text message. Financial borders create unnecessary friction and cost, disproportionately affecting those who need it most.
              </p>
              <p className="text-muted-foreground">
                AptoSend is our commitment to changing that. By combining the efficiency of blockchain with the intelligence of AI, we're building a financial network that is open, fair, and accessible to everyone, everywhere. Our goal is to empower individuals and businesses by making cross-border payments instant, affordable, and secure.
              </p>
            </div>
            <div>
              <Image 
                src="https://placehold.co/600x400.png" 
                alt="Global connection" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
                data-ai-hint="global network"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 md:py-12 border-t">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <WalletCards className="h-6 w-6 text-primary" />
            <span className="font-bold">AptoSend</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} AptoSend Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
