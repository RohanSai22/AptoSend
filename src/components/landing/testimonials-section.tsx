
'use client';
import * as React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";


const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
};

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
];

export function TestimonialsSection() {
    return (
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
    );
}
