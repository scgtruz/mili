import React from 'react';
import { JobCard } from './job-card';
import { Job } from '@/lib/types/job';

interface JobListProps {
  jobs: Job[];
  isLoading: boolean;
}

export function JobList({ jobs, isLoading }: JobListProps) {
  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white/50 backdrop-blur-sm shadow rounded-lg p-6 animate-pulse border border-mint-200/50">
            <div className="h-4 bg-mint-200/50 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-mint-200/50 rounded w-1/2 mb-4"></div>
            <div className="h-20 bg-mint-200/50 rounded w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 text-center border border-mint-200/50">
        <p className="text-mint-700 text-lg">No jobs found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}