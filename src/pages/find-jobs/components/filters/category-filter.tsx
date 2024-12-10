import React from 'react';
import { serviceCategories } from '@/data/service-categories';

interface CategoryFilterProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function CategoryFilter({ value, onChange, disabled }: CategoryFilterProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-mint-700 mb-2">
        Service Category
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border-mint-200 shadow-sm focus:border-mint-500 focus:ring-mint-500 bg-white/80 disabled:bg-mint-50/50"
        disabled={disabled}
      >
        <option value="">All Categories</option>
        {serviceCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}