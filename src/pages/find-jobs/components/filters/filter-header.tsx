import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface FilterHeaderProps {
  hasFilters: boolean;
  onReset: () => void;
}

export function FilterHeader({ hasFilters, onReset }: FilterHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-display font-medium text-mint-900">Search Filters</h3>
      {hasFilters && (
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
  );
}