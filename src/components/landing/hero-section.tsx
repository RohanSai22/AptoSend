
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    };

    return (
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
    );
}
