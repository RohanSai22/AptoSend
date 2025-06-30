
'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  Rocket,
  Globe,
  Zap,
  Network,
  Users,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { WalletCards } from 'lucide-react';
import { GlobalAnomalyGraph } from '@/components/global-anomaly-graph';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


export default function LandingPage() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground overflow-x-hidden">
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
          className="relative isolate"
        >
         <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div></div>

          <div className="container text-center mx-auto px-4 py-28 md:py-40">
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

        {/* Features Bento Grid */}
        <motion.section
          id="features"
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
                A Smarter, Safer Way to Send
              </h2>
              <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
                We've built a platform that is secure, fast, and fair. Your
                money, delivered with confidence.
              </p>
            </motion.div>
            
            <BentoGrid>
                {features.map((feature, i) => (
                    <BentoGridItem key={i} {...feature} />
                ))}
            </BentoGrid>
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
                patterns, automatically flagging high-risk transfers to protect the entire ecosystem.
              </motion.p>
            </div>
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="relative flex justify-center items-center">
              <div className="p-1 sm:p-4 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/20 shadow-2xl w-full">
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
                to everyone, everywhere.
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
            <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
                <Carousel
                    plugins={[
                        Autoplay({
                          delay: 4000,
                          stopOnInteraction: true,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 h-full">
                                <TestimonialCard {...testimonial} />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </motion.div>
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

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.1 } },
      }}
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
   const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  return (
    <motion.div
      variants={FADE_UP_ANIMATION_VARIANTS}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-card dark:border-white/[0.2] bg-card border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="flex items-center gap-2 mb-2">
            {icon}
            <div className="font-sans font-bold text-lg text-neutral-600 dark:text-neutral-200">
                {title}
            </div>
        </div>
        <div className="font-sans font-normal text-muted-foreground text-sm">
          {description}
        </div>
      </div>
    </motion.div>
  );
};

const SkeletonCard = ({imageHint, src}: {imageHint: string, src: string}) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
         <Image
            src={src}
            alt={imageHint}
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-full"
            data-ai-hint={imageHint}
          />
    </div>
)

const features = [
  {
    title: "AI Fraud Shield",
    description: "Our cutting-edge Graph Neural Network analyzes every transaction in real-time to detect and prevent fraud.",
    header: <SkeletonCard imageHint="security abstract" src="https://images.unsplash.com/photo-1648195699350-fa0ed4a263e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxhaSUyMGZyYXVkfGVufDB8fHx8MTc1MTMwNjk2Nnww&ixlib=rb-4.1.0&q=80&w=1080" />,
    className: "md:col-span-2",
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
  },
  {
    title: "Global Reach, Local Feel",
    description: "Send money with just a phone number. Your recipient is notified in their local currency.",
    header: <SkeletonCard imageHint="globe network" src="https://images.unsplash.com/photo-1584931423298-c576fda54bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxnbG9iYWx8ZW58MHx8fHwxNzUxMzA3MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080" />,
    className: "md:col-span-1",
    icon: <Globe className="h-5 w-5 text-primary" />,
  },
  {
    title: "Lightning Fast Settlement",
    description: "Leveraging USDC on Aptos and Solana for near-instant, low-cost settlements, 24/7.",
    header: <SkeletonCard imageHint="speed technology" src="https://images.unsplash.com/photo-1598566665290-e59c95256dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxmYXN0fGVufDB8fHx8MTc1MTMwNzA5MHww&ixlib=rb-4.1.0&q=80&w=1080" />,
    className: "md:col-span-1",
    icon: <Zap className="h-5 w-5 text-primary" />,
  },
  {
    title: "Borderless by Design",
    description: "Built for a world without financial friction. Send, receive, and grow your money effortlessly.",
    header: <SkeletonCard imageHint="connection abstract" src="https://images.unsplash.com/photo-1744731217845-7726c4f5b8bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxNHx8c2VhbWxlc3MlMjBpbnRlZ3JhdGlvbnxlbnwwfHx8fDE3NTEzMDcwNTd8MA&ixlib=rb-4.1.0&q=80&w=1080" />,
    className: "md:col-span-2",
    icon: <Rocket className="h-5 w-5 text-primary" />,
  },
];

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
  <Card className="flex flex-col justify-between h-full bg-background/50">
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
);

const testimonials = [
    {
        quote:"AptoSend is a game-changer. I sent money to my family overseas and they received it in minutes, not days. The low fees are just the cherry on top.",
        name:"Maria S.",
        title:"Freelance Designer",
        avatarUrl:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyMHx8ZmVtYWxlJTIwfGVufDB8fHx8MTc1MTMwNDgzMXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        quote:"The security features give me peace of mind. Knowing the AI is constantly monitoring for fraud makes me feel much safer than using traditional banks.",
        name:"David L.",
        title:"Small Business Owner",
        avatarUrl:"https://images.unsplash.com/photo-1676195470090-7c90bf539b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBpY29ufGVufDB8fHx8MTc1MTMwNDc4MXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        quote:"Finally, a modern way to handle international payments. The interface is clean, simple, and incredibly easy to use. Highly recommended!",
        name:"Aisha K.",
        title:"E-commerce Entrepreneur",
        avatarUrl:"https://images.unsplash.com/photo-1464863979621-258859e62245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxN3x8ZmVtYWxlfGVufDB8fHx8MTc1MTMwNDkzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
        quote:"The speed is incredible. I can't believe how quickly my payments settle compared to the old way. AptoSend is the future.",
        name:"Carlos G.",
        title:"Software Developer",
        avatarUrl:"https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtYW58ZW58MHx8fHwxNzUyMTE2MDMwfDA&ixlib=rb-4.0.3&q=80&w=1080"
    }
]


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
