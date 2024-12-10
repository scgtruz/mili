import React from 'react';
import { getStateName } from '@/lib/services/location.service';
import { MapPin } from 'lucide-react';

interface LocationDisplayProps {
  state: string;
  county: string;
  className?: string;
  showIcon?: boolean;
}

export function LocationDisplay({ state, county, className = '', showIcon = true }: LocationDisplayProps) {
  const location = `${county} County, ${getStateName(state)}`;
  
  return (
    <span className={`flex items-center text-gray-500 ${className}`}>
      {showIcon && <MapPin className="h-4 w-4 mr-2 text-mint-500" />}
      {location}
    </span>
  );
}