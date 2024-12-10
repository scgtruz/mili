import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Users, 
  PhoneCall, 
  Search, 
  DollarSign, 
  Handshake,
  Clock,
  Shield,
  Building
} from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-display font-bold text-mint-900 mb-4">
            How MILI USO Works
          </h1>
          <p className="text-xl text-mint-700 max-w-3xl mx-auto">
            A simple and efficient way to connect clients with quality contractors
          </p>
        </div>

        {/* Client Process */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-semibold text-mint-800 mb-8">
            For Clients
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-mint-100">
              <div className="bg-mint-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-mint-600" />
              </div>
              <h3 className="text-lg font-semibold text-mint-900 mb-2">1. Post Your Job for Free</h3>
              <p className="text-mint-700">
                Create a detailed job posting with your service needs and location. Your posting stays active for 30 days.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-mint-100">
              <div className="bg-mint-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-mint-600" />
              </div>
              <h3 className="text-lg font-semibold text-mint-900 mb-2">2. Receive Contractor Interest</h3>
              <p className="text-mint-700">
                Qualified contractors in your area will review your job posting and express interest in your project.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-mint-100">
              <div className="bg-mint-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <PhoneCall className="h-6 w-6 text-mint-600" />
              </div>
              <h3 className="text-lg font-semibold text-mint-900 mb-2">3. Connect with Contractors</h3>
              <p className="text-mint-700">
                Interested contractors will contact you directly to discuss details and provide quotes for your project.
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Process */}
        <section className="mb-20">
          <h2 className="text-2xl font-display font-semibold text-mint-800 mb-8">
            For Contractors
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-mint-100">
              <div className="bg-mint-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-mint-600" />
              </div>
              <h3 className="text-lg font-semibold text-mint-900 mb-2">1. Search for Active Jobs</h3>
              <p className="text-mint-700">
                Browse through our database of active job postings filtered by your service area and expertise.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-mint-100">
              <div className="bg-mint-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-mint-600" />
              </div>
              <h3 className="text-lg font-semibold text-mint-900 mb-2">2. Purchase Leads</h3>
              <p className="text-mint-700">
                When you find a job that matches your services, purchase the lead to access client contact information.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-mint-100">
              <div className="bg-mint-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Handshake className="h-6 w-6 text-mint-600" />
              </div>
              <h3 className="text-lg font-semibold text-mint-900 mb-2">3. Win New Business</h3>
              <p className="text-mint-700">
                Contact clients directly to discuss their needs and secure new projects for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-semibold text-mint-800 mb-8">
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-mint-50 rounded-full p-2 mt-1">
                <Clock className="h-5 w-5 text-mint-600" />
              </div>
              <div>
                <h3 className="font-semibold text-mint-900 mb-1">30-Day Active Period</h3>
                <p className="text-sm text-mint-700">All job postings remain active for 30 days, ensuring fresh opportunities.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-mint-50 rounded-full p-2 mt-1">
                <Shield className="h-5 w-5 text-mint-600" />
              </div>
              <div>
                <h3 className="font-semibold text-mint-900 mb-1">Secure Platform</h3>
                <p className="text-sm text-mint-700">Your information remains private until you choose to share it.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-mint-50 rounded-full p-2 mt-1">
                <Building className="h-5 w-5 text-mint-600" />
              </div>
              <div>
                <h3 className="font-semibold text-mint-900 mb-1">Local Focus</h3>
                <p className="text-sm text-mint-700">Connect with service providers in your specific area.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-display font-semibold text-mint-900 mb-6">
            Ready to Get Started?
          </h2>
          <div className="space-x-4">
            <Link to="/post-job">
              <Button size="lg" className="bg-mint-600 hover:bg-mint-700 text-white">
                Post a Job
              </Button>
            </Link>
            <Link to="/find-jobs">
              <Button size="lg" variant="outline" className="border-mint-600 text-mint-700 hover:bg-mint-50">
                Find Jobs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}