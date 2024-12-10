import { Job } from '@/lib/types/job';
import { JobFilters } from '@/lib/hooks/use-job-filters';

export function filterJobs(jobs: Job[], filters: JobFilters): Job[] {
  if (!jobs?.length) return [];

  return jobs.filter(job => {
    // Category filter
    if (filters.category?.trim()) {
      if (job.category !== filters.category) {
        return false;
      }
    }

    // State filter
    if (filters.state?.trim()) {
      if (job.state !== filters.state) {
        return false;
      }
    }

    // County filter
    if (filters.county?.trim()) {
      if (job.county.toLowerCase() !== filters.county.toLowerCase()) {
        return false;
      }
    }

    return true;
  });
}