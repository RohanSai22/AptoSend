
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

export function MissionSection() {
    return (
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
    );
}
