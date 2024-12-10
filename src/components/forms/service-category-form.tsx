import React from 'react';
import { serviceCategories } from '@/data/service-categories';

interface ServiceCategoryFormProps {
  category: string;
  onChange: (field: string, value: string) => void;
}

export function ServiceCategoryForm({ category, onChange }: ServiceCategoryFormProps) {
  return (
    <div>
      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
        Service Category
      </label>
      <select
        id="category"
        value={category}
        onChange={(e) => onChange('category', e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required
      >
        <option value="">Select a category</option>
        {serviceCategories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}