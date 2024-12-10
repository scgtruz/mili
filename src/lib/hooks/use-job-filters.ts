import { useState, useCallback } from 'react';

export interface JobFilters {
  category: string;
  state: string;
  county: string;
}

const defaultFilters: JobFilters = {
  category: '',
  state: '',
  county: ''
};

export function useJobFilters() {
  const [filters, setFilters] = useState<JobFilters>(defaultFilters);
  const [isLoading, setIsLoading] = useState(false);

  const updateFilters = useCallback((newFilters: Partial<JobFilters>) => {
    setFilters(prev => {
      const updatedFilters = { ...prev, ...newFilters };
      
      // Reset county when state changes
      if (newFilters.state !== undefined && newFilters.state !== prev.state) {
        updatedFilters.county = '';
      }
      
      return updatedFilters;
    });
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  return {
    filters,
    isLoading,
    setIsLoading,
    updateFilters,
    resetFilters,
  };
}