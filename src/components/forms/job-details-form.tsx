import React from 'react';
import { ServiceCategoryForm } from '@/pages/post-job/components/service-category-form';
import { JobType } from '@/lib/types/job';

interface JobDetailsFormProps {
  formData: {
    jobType: JobType;
    description: string;
    category: string;
  };
  onChange: (field: string, value: string) => void;
}

export function JobDetailsForm({ formData, onChange }: JobDetailsFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="jobType" className="block text-sm font-bold text-gray-900">
          Job Type
        </label>
        <select
          id="jobType"
          value={formData.jobType}
          onChange={(e) => onChange('jobType', e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        >
          <option value="">Select job type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      <ServiceCategoryForm 
        category={formData.category} 
        onChange={onChange} 
      />

      <div>
        <label htmlFor="description" className="block text-sm font-bold text-gray-900">
          Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => onChange('description', e.target.value)}
          rows={4}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>
    </div>
  );
}