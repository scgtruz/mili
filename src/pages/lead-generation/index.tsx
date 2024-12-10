import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, DollarSign, Users, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LEAD_PRICE } from '@/lib/utils/constants';

export function LeadGeneration() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
          Welcome to MILI USO Lead Generation
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Your Partner in Growing Your Business Through Quality Leads
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-display font-semibold mb-6">
            How Our Lead Generation Works
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-mint-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">We connect you with qualified potential customers actively seeking your services</p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-mint-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">When a lead matches your business criteria, we send it directly to you</p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-mint-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">You only receive leads within your specified service area and industry</p>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-6 w-6 text-mint-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">Contact the lead promptly to maximize your conversion chances</p>
            </li>
          </ul>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-display font-semibold mb-6">
            Our Payment Structure
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <DollarSign className="h-6 w-6 text-mint-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">You pay nothing upfront - our service is 100% free to join</p>
            </li>
            <li className="flex items-start">
              <DollarSign className="h-6 w-6 text-mint-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">Simple pricing - just ${LEAD_PRICE.toFixed(2)} per qualified lead</p>
            </li>
            <li className="flex items-start">
              <DollarSign className="h-6 w-6 text-mint-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">You're only charged when you receive a qualified lead</p>
            </li>
            <li className="flex items-start">
              <DollarSign className="h-6 w-6 text-mint-500 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">Transparent billing - all charges are clearly detailed in your dashboard</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-mint-50/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-16">
        <h2 className="text-2xl font-display font-semibold mb-6 text-center">
          Your Benefits
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/80 rounded-xl p-6">
            <Users className="h-8 w-8 text-mint-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Pre-screened Leads</h3>
            <p className="text-gray-600">Quality leads that match your business criteria</p>
          </div>
          <div className="bg-white/80 rounded-xl p-6">
            <Bell className="h-8 w-8 text-mint-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Real-time Notifications</h3>
            <p className="text-gray-600">Instant alerts when new leads are available</p>
          </div>
          <div className="bg-white/80 rounded-xl p-6">
            <CheckCircle className="h-8 w-8 text-mint-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Exclusive Leads</h3>
            <p className="text-gray-600">Leads are exclusively yours in your service area</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-display font-semibold mb-6">
          Ready to Get Started?
        </h2>
        <Link to="/signup">
          <Button size="lg" className="bg-mint-500 hover:bg-mint-600">
            Create Account
          </Button>
        </Link>
      </div>
    </div>
  );
}