import React from 'react';
import { US_STATES } from '@/lib/data/us-states';
import { useCounties } from '@/lib/hooks/use-counties';
import { MapPin } from 'lucide-react';

interface LocationSelectProps {
  state: string;
  county: string;
  onChange: (field: 'state' | 'county', value: string) => void;
  className?: string;
}

export function LocationSelect({ state, county, onChange, className }: LocationSelectProps) {
  const { counties, isLoading, error } = useCounties(state);

  return (
    <div className={className}>
      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 text-green-600 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">Location</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="state" className="block text-sm font-bold text-gray-900">
            State
          </label>
          <select
            id="state"
            value={state}
            onChange={(e) => {
              onChange('state', e.target.value);
              onChange('county', ''); // Reset county when state changes
            }}
            className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            required
          >
            <option value="">Select a state</option>
            {US_STATES.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="county" className="block text-sm font-bold text-gray-900">
            County
          </label>
          <div className="relative">
            <select
              id="county"
              value={county}
              onChange={(e) => onChange('county', e.target.value)}
              className={`mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 ${
                !state || isLoading ? 'bg-gray-50' : ''
              }`}
              required
              disabled={!state || isLoading}
            >
              <option value="">
                {isLoading ? 'Loading counties...' : 'Select a county'}
              </option>
              {counties.map((county) => (
                <option key={`${county.state}-${county.name}`} value={county.name}>
                  {county.name}
                </option>
              ))}
            </select>
            {isLoading && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-500"></div>
              </div>
            )}
          </div>
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  );
}