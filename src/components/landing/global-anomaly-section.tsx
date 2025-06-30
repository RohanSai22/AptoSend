
'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import { GlobalAnomalyGraph } from '@/components/global-anomaly-graph';

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

export function GlobalAnomalySection() {
    return (
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
              <GlobalAnomalyGraph />
            </motion.div>
          </div>
        </motion.section>
    );
}
