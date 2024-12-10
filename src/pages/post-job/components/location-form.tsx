import React from 'react';
import { US_STATES } from '@/lib/data/us-states';
import { useCounties } from '@/lib/hooks/use-counties';
import { MapPin } from 'lucide-react';

interface LocationFormProps {
  state: string;
  county: string;
  onChange: (field: string, value: string) => void;
}

export function LocationForm({ state, county, onChange }: LocationFormProps) {
  const { counties, isLoading, error } = useCounties(state);

  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 text-mint-500 mr-2" />
        <h3 className="text-lg font-medium text-gray-900">Location</h3>
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
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
        <label htmlFor="county" className="block text-sm font-medium text-gray-700">
          County
        </label>
        <div className="relative">
          <select
            id="county"
            value={county}
            onChange={(e) => onChange('county', e.target.value)}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
              !state || isLoading ? 'bg-gray-50' : ''
            }`}
            required
            disabled={!state || isLoading}
          >
            <option value="">
              {isLoading ? 'Loading counties...' : 'Select a county'}
            </option>
            {counties.map((county) => (
              <option key={county.name} value={county.name}>
                {county.name}
              </option>
            ))}
          </select>
          {isLoading && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-mint-500"></div>
            </div>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
}