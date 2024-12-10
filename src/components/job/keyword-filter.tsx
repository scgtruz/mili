import React from 'react';
import { Search } from 'lucide-react';
import { debounce } from '@/lib/utils';

interface KeywordFilterProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function KeywordFilter({ value, onChange, disabled }: KeywordFilterProps) {
  const debouncedOnChange = React.useMemo(
    () => debounce((value: string) => onChange(value), 300),
    [onChange]
  );

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-mint-700">
        Search Jobs
      </label>
      <div className="relative">
        <input
          type="text"
          defaultValue={value}
          onChange={(e) => debouncedOnChange(e.target.value)}
          placeholder="Search by title or description"
          className="pl-10 pr-4 py-2 w-full rounded-md border-mint-200 shadow-sm focus:border-mint-500 focus:ring-mint-500 disabled:bg-mint-50/50"
          disabled={disabled}
        />
        <Search className="h-4 w-4 text-mint-400 absolute left-3 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}