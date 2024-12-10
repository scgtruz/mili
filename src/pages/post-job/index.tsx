import React from 'react';
import { JobForm } from './components/job-form';

export function PostJob() {
  return (
    <div className="min-h-[calc(100vh-6rem)] bg-mint-100/50">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-display font-bold text-mint-900 mb-8">Post a New Job</h1>
        <JobForm />
      </div>
    </div>
  );
}