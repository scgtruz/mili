import React from 'react';
import { StateSelect } from './state-select';
import { CountySelect } from './county-select';
import { Job } from '@/lib/types/job';

interface LocationFilterProps {
  state: string;
  county: string;
  onChange: (field: 'state' | 'county', value: string) => void;
  disabled?: boolean;
  className?: string;
  jobs?: Job[];
}

export function LocationFilter({
  state,
  county,
  onChange,
  disabled,
  className = '',
  jobs = []
}: LocationFilterProps) {
  const handleStateChange = (value: string) => {
    onChange('state', value);
    onChange('county', ''); // Reset county when state changes
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <StateSelect
        value={state}
        onChange={handleStateChange}
        disabled={disabled}
        jobs={jobs}
      />
      <CountySelect
        state={state}
        value={county}
        onChange={(value) => onChange('county', value)}
        disabled={disabled}
        jobs={jobs}
      />
    </div>
  );
}