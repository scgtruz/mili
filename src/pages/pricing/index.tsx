import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  CheckCircle, 
  Target, 
  Briefcase,
  Shield,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';
import { LEAD_PRICE } from '@/lib/utils/constants';

export function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-mint-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-mint-700 max-w-3xl mx-auto">
            Only pay for the leads you want, with no recurring fees or commitments
          </p>
        </div>

        {/* Main Pricing Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Client Side */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-mint-100">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-mint-600 mr-3" />
              <h2 className="text-2xl font-display font-semibold text-mint-900">For Clients</h2>
            </div>
            
            <div className="mb-8">
              <div className="text-3xl font-bold text-mint-900 mb-2">$0</div>
              <p className="text-mint-700">Post jobs completely free</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-mint-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Post unlimited job opportunities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-mint-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Reach qualified contractors in your area</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-mint-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">No obligation or hidden fees</span>
              </li>
            </ul>

            <Link to="/post-job">
              <Button className="w-full bg-mint-600 hover:bg-mint-700 text-white">
                Post a Job
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Contractor Side */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-mint-100">
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-mint-600 mr-3" />
              <h2 className="text-2xl font-display font-semibold text-mint-900">For Contractors</h2>
            </div>
            
            <div className="mb-8">
              <div className="text-3xl font-bold text-mint-900 mb-2">
                ${LEAD_PRICE}
                <span className="text-lg font-normal text-mint-700"> per lead</span>
              </div>
              <p className="text-mint-700">Pay only for the leads you want</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-mint-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Access detailed job information before purchasing</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-mint-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Get client contact details instantly upon purchase</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-mint-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">No subscription or membership fees</span>
              </li>
            </ul>

            <Link to="/find-jobs">
              <Button className="w-full bg-mint-600 hover:bg-mint-700 text-white">
                Find Jobs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Why It Works Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-semibold text-mint-800 text-center mb-12">
            Why This Model Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-mint-100">
              <div className="bg-mint-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-mint-600" />
              </div>
              <h3 className="text-lg font-semibold text-mint-900 mb-2">Targeted Opportunities</h3>
              <p className="text-mint-700">
                Filter jobs by location and service type to find the perfect matches for your business
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-mint-100">
              <div className="bg-mint-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-mint-600" />
              </div>
              <h3 className="text-lg font-semibold text-mint-900 mb-2">Risk-Free for Clients</h3>
              <p className="text-mint-700">
                Post jobs at no cost and only engage with genuinely interested contractors
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-mint-100">
              <div className="bg-mint-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-mint-600" />
              </div>
              <h3 className="text-lg font-semibold text-mint-900 mb-2">No Commitments</h3>
              <p className="text-mint-700">
                Pay as you go with no recurring fees or long-term obligations
              </p>
            </div>
          </div>
        </section>

        {/* Example Scenario */}
        <section className="bg-mint-50/50 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-display font-semibold text-mint-800 mb-6">
            How It Works: An Example
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-4">
                <span className="text-mint-600 font-semibold">1</span>
              </div>
              <p className="text-mint-700">
                A client in Monroe County, NY, posts a job for driveway seal coating
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-4">
                <span className="text-mint-600 font-semibold">2</span>
              </div>
              <p className="text-mint-700">
                A contractor specializing in asphalt services sees the job posting and purchases the lead for ${LEAD_PRICE}
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-4">
                <span className="text-mint-600 font-semibold">3</span>
              </div>
              <p className="text-mint-700">
                The contractor receives the client's contact information and reaches out to provide a quote
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center mt-1 mr-4">
                <span className="text-mint-600 font-semibold">4</span>
              </div>
              <p className="text-mint-700">
                A ${LEAD_PRICE} investment could result in a project worth hundreds or thousands of dollars
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-display font-semibold text-mint-900 mb-6">
            Ready to Get Started?
          </h2>
          <div className="space-x-4">
            <Link to="/signup">
              <Button size="lg" className="bg-mint-600 hover:bg-mint-700 text-white">
                Create Account
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-mint-600 text-mint-700 hover:bg-mint-50">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}