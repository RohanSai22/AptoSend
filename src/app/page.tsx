
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Rocket,
  Globe,
  Zap,
  Network,
  Banknote,
  Send,
  MessageSquare,
  ShieldHalf,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import { WalletCards } from 'lucide-react';
import { GlobalAnomalyGraph } from '@/components/global-anomaly-graph';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function LandingPage() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
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

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="relative py-28 md:py-40"
        >
          <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e0f8f8_1px,transparent_1px)] dark:bg-[radial-gradient(#102c2c_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="container text-center mx-auto px-4">
            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="bg-primary/10 inline-block p-3 rounded-full mb-6"
            >
                <Rocket className="h-8 w-8 text-primary" />
            </motion.div>
            <motion.h1
              className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              The Future of Global Remittance
            </motion.h1>
            <motion.p
              className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground md:text-xl"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              AptoSend revolutionizes how you send money across borders.
              Experience instant, low-cost transfers powered by blockchain and
              secured by our industry-leading AI Fraud Shield.
            </motion.p>
            <motion.div
              className="mt-10 flex justify-center gap-4"
              variants={FADE_UP_ANIMATION_VARIANTS}
            >
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/login">Send Money Now</Link>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          className="py-20 md:py-24 bg-card/50"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="container mx-auto px-4">
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Why Choose AptoSend?
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                We've built a platform that is secure, fast, and fair. Your
                money, delivered with confidence.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<ShieldCheck />}
                title="AI Fraud Shield"
                description="Our cutting-edge Graph Neural Network analyzes every transaction in real-time to detect and prevent fraud, keeping your funds safe."
              />
              <FeatureCard
                icon={<Zap />}
                title="Blockchain Settlement"
                description="We leverage the power of USDC on Aptos and Solana for fast, low-cost, and transparent transaction settlements 24/7."
              />
              <FeatureCard
                icon={<Globe />}
                title="Global Reach, Local Feel"
                description="Send money with just a phone number. Your recipient is notified in their local currency, making international transfers feel effortless."
              />
            </div>
          </div>
        </motion.section>

        {/* How It Works Section */}
        <motion.section
          className="py-20 md:py-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="container mx-auto px-4">
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Send Money in 4 Easy Steps
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Get your money where it needs to go, quickly and securely.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-4 gap-8 text-center relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-12">
                <svg width="100%" height="2">
                  <line
                    x1="0"
                    y1="1"
                    x2="100%"
                    y1="1"
                    strokeWidth="2"
                    strokeDasharray="8, 8"
                    className="stroke-border"
                  />
                </svg>
              </div>
              <HowItWorksStep
                icon={<Banknote />}
                title="Link Account"
                description="Securely connect your bank account or card in seconds."
              />
              <HowItWorksStep
                icon={<Send />}
                title="Enter Details"
                description="Tell us who you're sending to and how much."
              />
              <HowItWorksStep
                icon={<ShieldHalf />}
                title="AI Secure Check"
                description="Our AI Fraud Shield analyzes and secures your transaction."
              />
              <HowItWorksStep
                icon={<MessageSquare />}
                title="Money Sent"
                description="Your recipient is notified and the funds are on their way."
              />
            </div>
          </div>
        </motion.section>

        {/* Global Anomaly Graph Section */}
        <motion.section
          className="py-20 md:py-24 bg-card/50"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="bg-primary/10 inline-block p-3 rounded-full mb-4">
                <Network className="h-8 w-8 text-primary" />
              </motion.div>
              <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-3xl font-bold tracking-tight sm:text-4xl">
                AI-Powered Global Anomaly Detection
              </motion.h2>
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-muted-foreground mt-3 max-w-3xl mx-auto">
                This is a live, anonymized visualization of our global
                transaction network. Our AI constantly monitors for unusual
                patterns, automatically flagging high-risk transfers (shown in
                yellow and red) to protect the entire ecosystem.
              </motion.p>
            </div>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative flex justify-center items-center">
              <div className="p-4 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/20 shadow-2xl w-full">
                <GlobalAnomalyGraph />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          id="mission"
          className="py-20 md:py-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <div className="container grid md:grid-cols-2 gap-12 items-center mx-auto px-4">
            <div className="space-y-4">
              <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Vision for a Borderless Economy
              </motion.h2>
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-muted-foreground text-lg">
                We believe that moving money should be as simple as sending a
                text message. Financial borders create unnecessary friction and
                cost, disproportionately affecting those who need it most.
              </motion.p>
              <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-muted-foreground">
                AptoSend is our commitment to changing that. By combining the
                efficiency of blockchain with the intelligence of AI, we're
                building a financial network that is open, fair, and accessible
                to everyone, everywhere. Our goal is to empower individuals and
                businesses by making cross-border payments instant, affordable,
                and secure.
              </motion.p>
            </div>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
              <Image
                src="https://images.unsplash.com/photo-1571867424488-4565932edb41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMnx8cGF5bWVudHxlbnwwfHx8fDE3NTEzMDQ3MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Global connection"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="global connection"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id="testimonials"
          className="py-20 md:py-24 bg-card/50"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="container mx-auto px-4">
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-center mb-16">
              <div className="bg-accent/10 inline-block p-3 rounded-full mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Trusted by Users Worldwide
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our users have to
                say.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="AptoSend is a game-changer. I sent money to my family overseas and they received it in minutes, not days. The low fees are just the cherry on top."
                name="Maria S."
                title="Freelance Designer"
                avatarUrl="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8ZmVtYWxlJTIwfGVufDB8fHx8MTc1MTMwNDgzMXww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TestimonialCard
                quote="The security features give me peace of mind. Knowing the AI is constantly monitoring for fraud makes me feel much safer than using traditional banks."
                name="David L."
                title="Small Business Owner"
                avatarUrl="https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBpY29ufGVufDB8fHx8MTc1MTMwNDc4MXww&ixlib=rb-4.1.0&q=80&w=1080"
              />
              <TestimonialCard
                quote="Finally, a modern way to handle international payments. The interface is clean, simple, and incredibly easy to use. Highly recommended!"
                name="Aisha K."
                title="E-commerce Entrepreneur"
                avatarUrl="https://images.unsplash.com/photo-1464863979621-258859e62245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8ZmVtYWxlfGVufDB8fHx8MTc1MTMwNDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              />
            </div>
          </div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          className="py-20 md:py-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={FADE_UP_ANIMATION_VARIANTS}
        >
          <div className="container text-center mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Join the Revolution?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Create an account in minutes and experience the future of money
              transfers today.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-6"
              >
                <Link href="/login">Sign Up for Free</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t bg-card/50">
        <div className="container max-w-screen-2xl grid grid-cols-2 md:grid-cols-5 gap-8 mx-auto px-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <WalletCards className="h-7 w-7 text-primary" />
              <span className="font-bold text-lg">AptoSend</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              © {new Date().getFullYear()} AptoSend Inc. <br /> All rights
              reserved.
            </p>
          </div>
          <FooterLinks
            title="Product"
            links={['Features', 'Security', 'Pricing', 'API']}
          />
          <FooterLinks
            title="Company"
            links={['About Us', 'Careers', 'Blog', 'Press']}
          />
          <FooterLinks
            title="Support"
            links={['Help Center', 'Contact Us', 'Status']}
          />
          <FooterLinks
            title="Legal"
            links={['Terms of Service', 'Privacy Policy']}
          />
        </div>
      </footer>
    </div>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { type: 'spring' } },
    }}
    className="flex flex-col items-center text-center p-6 rounded-lg bg-card shadow-sm hover:shadow-lg transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="p-4 bg-primary/10 rounded-full mb-4">
      {React.cloneElement(icon as React.ReactElement, {
        className: 'h-8 w-8 text-primary',
      })}
    </div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-muted-foreground">{description}</p>
  </motion.div>
);

const HowItWorksStep = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
   variants={{
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { type: 'spring' } },
    }}
  className="flex flex-col items-center relative z-10">
    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-background border-2 border-primary mb-4 shadow-lg">
      {React.cloneElement(icon as React.ReactElement, {
        className: 'h-8 w-8 text-primary',
      })}
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

const TestimonialCard = ({
  quote,
  name,
  title,
  avatarUrl,
}: {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
}) => (
  <motion.div
   variants={{
      hidden: { opacity: 0, y: 10 },
      show: { opacity: 1, y: 0, transition: { type: 'spring' } },
    }}
  >
    <Card className="flex flex-col justify-between h-full">
      <CardContent className="pt-6">
        <p className="text-foreground/90">"{quote}"</p>
      </CardContent>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Image
            src={avatarUrl}
            alt={name}
            width={40}
            height={40}
            className="rounded-full"
            data-ai-hint="person avatar"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardHeader>
    </Card>
  </motion.div>
);

const FooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
