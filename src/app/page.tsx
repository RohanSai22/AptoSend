
'use client';

import * as React from 'react';
import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { GlobalAnomalySection } from '@/components/landing/global-anomaly-section';
import { MissionSection } from '@/components/landing/mission-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { CtaSection } from '@/components/landing/cta-section';
import { AppFooter } from '@/components/landing/app-footer';


export default function LandingPage() {

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground overflow-x-hidden">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <GlobalAnomalySection />
        <MissionSection />
        <TestimonialsSection />
        <CtaSection />
      </main>

      <AppFooter />
    </div>
  );
}
