import React from 'react';
import { HeroSection } from '@/components/home/hero-section';
import { ServicesSection } from '@/components/home/services-section';

export function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ServicesSection />
    </div>
  );
}