
'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

export function CtaSection() {
    return (
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
    );
}
