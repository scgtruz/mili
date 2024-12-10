import React from 'react';
import { MapPin, Loader } from 'lucide-react';
import { useActiveStates } from '@/lib/hooks/use-active-states';

interface StateSelectProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

export function StateSelect({ value, onChange, disabled, className }: StateSelectProps) {
  const { activeStates, isLoading, error } = useActiveStates();

  return (
    <div className={className}>
      <label className="flex items-center text-sm font-medium text-mint-700 mb-2">
        <MapPin className="h-4 w-4 text-mint-500 mr-2" />
        State
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border-mint-200 shadow-sm focus:border-mint-500 focus:ring-mint-500 bg-white/80 disabled:bg-mint-50/50"
          disabled={disabled || isLoading}
        >
          <option value="">
            {isLoading ? 'Loading states...' : 'All States'}
          </option>
          {activeStates.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>
        {isLoading && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <Loader className="h-4 w-4 text-mint-500 animate-spin" />
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}