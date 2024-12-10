import React from 'react';
import { Clock } from 'lucide-react';

interface DateRangeFilterProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function DateRangeFilter({ value, onChange, disabled }: DateRangeFilterProps) {
  return (
    <div className="space-y-2">
      <label className="flex items-center text-sm font-medium text-mint-700">
        <Clock className="h-4 w-4 text-mint-500 mr-2" />
        Posted Within
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border-mint-200 shadow-sm focus:border-mint-500 focus:ring-mint-500 bg-white/80 disabled:bg-mint-50/50"
        disabled={disabled}
      >
        <option value="all">Any Time</option>
        <option value="today">Today</option>
        <option value="week">Last 7 Days</option>
        <option value="month">Last 30 Days</option>
      </select>
    </div>
  );
}