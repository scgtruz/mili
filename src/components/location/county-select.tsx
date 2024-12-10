import React from 'react';
import { useCounties } from '@/lib/hooks/use-counties';
import { Loader } from 'lucide-react';
import { Job } from '@/lib/types/job';

interface CountySelectProps {
  state: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  className?: string;
  jobs?: Job[];
}

export function CountySelect({ state, value, onChange, disabled, className, jobs = [] }: CountySelectProps) {
  const { counties, isLoading, error } = useCounties(state);
  const isDisabled = disabled || !state || isLoading;

  // Calculate job counts per county
  const countyJobCounts = React.useMemo(() => {
    const counts = new Map<string, number>();
    if (state && jobs.length > 0) {
      jobs.forEach(job => {
        if (job.state === state) {
          counts.set(job.county, (counts.get(job.county) || 0) + 1);
        }
      });
    }
    return counts;
  }, [jobs, state]);

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-mint-700 mb-2">
        County
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-md border-mint-200 shadow-sm focus:border-mint-500 focus:ring-mint-500 bg-white/80 disabled:bg-mint-50/50"
          disabled={isDisabled}
        >
          <option value="">
            {isLoading ? 'Loading counties...' : 'All Counties'}
          </option>
          {counties.map((county) => {
            const jobCount = countyJobCounts.get(county.name) || 0;
            return (
              <option key={`${county.state}-${county.name}`} value={county.name}>
                {county.name} {jobCount > 0 && `(${jobCount} job${jobCount === 1 ? '' : 's'})`}
              </option>
            );
          })}
        </select>
        {isLoading && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <Loader className="h-4 w-4 text-mint-500 animate-spin" />
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}