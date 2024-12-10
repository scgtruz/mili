import React from 'react';
import { Target, Users, Shield } from 'lucide-react';

export function MissionSection() {
  return (
    <section className="py-16 bg-mint-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-mint-900">Our Mission</h2>
          <p className="mt-4 text-lg text-mint-700 max-w-3xl mx-auto">
            Connecting quality contractors with clients while maintaining the highest standards of service and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Target className="h-8 w-8 text-mint-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-mint-700">
              We prioritize connecting clients with skilled, reliable contractors who deliver exceptional results.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Users className="h-8 w-8 text-mint-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Focus</h3>
            <p className="text-mint-700">
              Building stronger local communities by facilitating meaningful connections between clients and contractors.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Shield className="h-8 w-8 text-mint-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trust & Security</h3>
            <p className="text-mint-700">
              Maintaining a secure and transparent platform where both clients and contractors can operate with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}