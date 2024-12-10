import React from 'react';
import { Button } from '@/components/ui/button';
import { serviceCategories } from '@/data/service-categories';
import { X } from 'lucide-react';
import { JobFilters } from '@/lib/hooks/use-job-filters';
import { LocationFilter } from '@/components/location/location-filter';

interface JobFiltersPanelProps {
  filters: JobFilters;
  onFilterChange: (filters: Partial<JobFilters>) => void;
  onReset: () => void;
  isLoading: boolean;
}

export function JobFiltersPanel({ 
  filters, 
  onFilterChange, 
  onReset, 
  isLoading 
}: JobFiltersPanelProps) {
  const handleChange = (field: keyof JobFilters, value: string) => {
    onFilterChange({ [field]: value });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-mint-200/50 sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-display font-medium text-mint-900">Search Filters</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="text-mint-600 hover:text-mint-700 hover:bg-mint-50"
          >
            <X className="h-4 w-4 mr-1" />
            Reset
          </Button>
        )}
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-mint-700 mb-2">
            Service Category
          </label>
          <select
            value={filters.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="w-full rounded-md border-mint-200 shadow-sm focus:border-mint-500 focus:ring-mint-500 bg-white/80 disabled:bg-mint-50/50"
            disabled={isLoading}
          >
            <option value="">All Categories</option>
            {serviceCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <LocationFilter
          state={filters.state}
          county={filters.county}
          onChange={handleChange}
          disabled={isLoading}
        />
      </div>
    </div>
  );
}