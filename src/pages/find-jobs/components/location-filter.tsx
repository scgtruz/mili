import React from 'react';
import { US_STATES } from '@/lib/data/us-states';
import { useLocation } from '@/lib/hooks/use-location';
import { MapPin } from 'lucide-react';

interface LocationFilterProps {
  state: string;
  county: string;
  onChange: (field: string, value: string) => void;
  disabled?: boolean;
}

export function LocationFilter({
  state,
  county,
  onChange,
  disabled = false
}: LocationFilterProps) {
  const { counties, isLoading } = useLocation(state);

  return (
    <div className="space-y-4">
      <div className="flex items-center mb-2">
        <MapPin className="h-5 w-5 text-mint-500 mr-2" />
        <span className="text-sm font-medium text-gray-700">Location</span>
      </div>

      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">
          State
        </label>
        <select
          id="state"
          value={state}
          onChange={(e) => {
            onChange('state', e.target.value);
            onChange('county', ''); // Reset county when state changes
          }}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mint-500 focus:ring-mint-500"
          disabled={disabled}
        >
          <option key="all-states" value="">All States</option>
          {US_STATES.map((stateOption) => (
            <option key={stateOption.abbreviation} value={stateOption.abbreviation}>
              {stateOption.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="county" className="block text-sm font-medium text-gray-700">
          County
        </label>
        <div className="relative">
          <select
            id="county"
            value={county}
            onChange={(e) => onChange('county', e.target.value)}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-mint-500 focus:ring-mint-500 ${
              !state || isLoading ? 'bg-gray-50' : ''
            }`}
            disabled={!state || isLoading || disabled}
          >
            <option key="all-counties" value="">All Counties</option>
            {counties.map((countyOption) => (
              <option key={`${countyOption.state}-${countyOption.name}`} value={countyOption.name}>
                {countyOption.name}
              </option>
            ))}
          </select>
          {isLoading && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-mint-500"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}