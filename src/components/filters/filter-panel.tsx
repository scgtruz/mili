import React from 'react';
import { FilterHeader } from './filter-header';
import { CategoryFilter } from './category-filter';
import { LocationFilter } from '@/components/location/location-filter';
import { JobFilters } from '@/lib/hooks/use-job-filters';
import { Job } from '@/lib/types/job';

interface FilterPanelProps {
  filters: JobFilters;
  onFilterChange: (filters: Partial<JobFilters>) => void;
  onReset: () => void;
  isLoading: boolean;
  jobs?: Job[];
}

export function FilterPanel({ 
  filters, 
  onFilterChange, 
  onReset, 
  isLoading,
  jobs = []
}: FilterPanelProps) {
  const handleChange = (field: keyof JobFilters, value: string) => {
    onFilterChange({ [field]: value });
  };

  const hasActiveFilters = Object.values(filters).some(value => value !== '');

  return (
    <div className="bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-mint-200/50 sticky top-24">
      <FilterHeader 
        hasFilters={hasActiveFilters} 
        onReset={onReset} 
      />
      
      <div className="space-y-6">
        <CategoryFilter
          value={filters.category}
          onChange={(value) => handleChange('category', value)}
          disabled={isLoading}
        />

        <LocationFilter
          state={filters.state}
          county={filters.county}
          onChange={handleChange}
          disabled={isLoading}
          jobs={jobs}
        />
      </div>
    </div>
  );
}