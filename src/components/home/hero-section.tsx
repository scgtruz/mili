import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <div className="relative bg-mint-100 min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-display font-bold text-mint-900 leading-tight mb-8">
            Elevating Outdoor Services: Where Clients Meet Quality and Contractors Find Opportunity
          </h1>
          <p className="text-xl text-mint-700 mb-12">
            Connect with trusted professionals for all your outdoor service needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/post-job">
              <Button size="lg" className="bg-coral-500 hover:bg-coral-600 text-white font-semibold">
                Post a Job <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/find-jobs">
              <Button size="lg" variant="outline" className="border-mint-500 text-mint-700 hover:bg-mint-50">
                Find Jobs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}