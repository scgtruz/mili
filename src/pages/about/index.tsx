import React from 'react';
import { MissionSection } from './components/mission-section';
import { StorySection } from './components/story-section';

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50/50 to-white">
      {/* Hero Section */}
      <div className="bg-mint-100/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-mint-900 mb-6">
            About MILI USO
          </h1>
          <p className="text-xl text-mint-700 max-w-3xl mx-auto">
            Transforming the outdoor services industry through innovation and trust
          </p>
        </div>
      </div>

      <StorySection />
      <MissionSection />
    </div>
  );
}