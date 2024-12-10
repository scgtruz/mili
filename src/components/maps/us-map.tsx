import React, { useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import { useActiveStates } from '@/lib/hooks/use-active-states';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader } from 'lucide-react';

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const getStateColor = (jobCount: number): string => {
  if (jobCount === 0) return '#e2e8f0'; // gray-200
  if (jobCount <= 2) return '#86efac'; // green-300
  if (jobCount <= 5) return '#4ade80'; // green-400
  return '#22c55e'; // green-500
};

const getHoverColor = (jobCount: number): string => {
  if (jobCount === 0) return '#cbd5e1'; // gray-300
  if (jobCount <= 2) return '#6ee7b7'; // green-400
  if (jobCount <= 5) return '#34d399'; // green-500
  return '#16a34a'; // green-600
};

interface USMapProps {
  onStateSelect?: (state: string) => void;
}

export function USMap({ onStateSelect }: USMapProps) {
  const { activeStates, jobs, isLoading, error } = useActiveStates();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const stateJobCounts = useMemo(() => {
    const counts = new Map<string, number>();
    jobs.forEach(job => {
      counts.set(job.state, (counts.get(job.state) || 0) + 1);
    });
    return counts;
  }, [jobs]);

  const handleStateClick = (stateCode: string) => {
    if (stateJobCounts.get(stateCode)) {
      if (onStateSelect) {
        onStateSelect(stateCode);
      } else {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('state', stateCode);
        navigate(`/find-jobs?${newParams.toString()}`);
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[300px]">
        <Loader className="h-6 w-6 text-mint-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[300px] text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="w-full" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => {
                const stateCode = geo.properties.postal;
                const jobCount = stateJobCounts.get(stateCode) || 0;
                const tooltipContent = `${geo.properties.name}${jobCount > 0 ? ` - ${jobCount} job${jobCount === 1 ? '' : 's'}` : ''}`;
                
                return (
                  <Geography
                    key={geo.id}
                    geography={geo}
                    data-tooltip-id="state-tooltip"
                    data-tooltip-content={tooltipContent}
                    fill={getStateColor(jobCount)}
                    stroke="#fff"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        outline: "none",
                        transition: "all 250ms",
                      },
                      hover: {
                        fill: getHoverColor(jobCount),
                        outline: "none",
                        cursor: jobCount > 0 ? "pointer" : "default",
                        strokeWidth: 1,
                      },
                      pressed: {
                        fill: getHoverColor(jobCount),
                        outline: "none",
                      }
                    }}
                    onClick={() => handleStateClick(stateCode)}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
        <Tooltip id="state-tooltip" />
      </div>
      <div className="text-center mt-2 text-sm text-mint-600">
        Total Jobs Available: {jobs.length}
      </div>
    </div>
  );
}