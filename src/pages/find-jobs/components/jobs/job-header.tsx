import React from 'react';

interface JobHeaderProps {
  jobCount: number;
}

export function JobHeader({ jobCount }: JobHeaderProps) {
  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 mb-6 border border-mint-200/50">
      <h1 className="text-2xl font-display font-bold text-mint-900">Available Jobs</h1>
      <p className="text-sm text-mint-600 mt-1">
        {jobCount} {jobCount === 1 ? 'job' : 'jobs'} found
      </p>
    </div>
  );
}