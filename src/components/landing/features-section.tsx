
'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Rocket, Globe, Zap } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
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
);

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

export function FeaturesSection() {
    return (
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
    );
}
