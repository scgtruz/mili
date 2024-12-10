import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCategory } from '@/data/service-categories';

interface ServiceCardProps {
  category: ServiceCategory;
}

export function ServiceCard({ category }: ServiceCardProps) {
  return (
    <div className="bg-mint-50 p-6 rounded-xl border border-mint-100 hover:shadow-lg transition-all duration-300 group">
      <h3 className="text-xl font-display font-semibold text-mint-900 mb-4">
        {category.name}
      </h3>
      <ul className="space-y-2 text-mint-700 mb-6">
        {category.services.map((service) => (
          <li key={service} className="flex items-center">
            <ArrowRight className="h-4 w-4 text-coral-500 mr-2" />
            {service}
          </li>
        ))}
      </ul>
      <Link
        to={`/find-jobs?category=${category.id}`}
        className="inline-flex items-center text-coral-500 hover:text-coral-600 font-semibold group-hover:translate-x-1 transition-transform"
      >
        View Jobs
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}