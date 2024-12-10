import React from 'react';
import { ServiceCard } from './service-card';
import { serviceCategories } from '@/data/service-categories';

export function ServicesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold text-mint-900">
            Our Service Categories
          </h2>
          <p className="mt-4 text-lg text-mint-700">
            Browse through our comprehensive range of outdoor services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <ServiceCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}