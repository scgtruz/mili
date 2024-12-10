import { handleFirestoreError } from '@/lib/utils/error-handling';
import { Job } from '@/lib/types/job';

export function handleJobQueryError(error: unknown): Job[] {
  console.error('Error fetching jobs:', error);
  const handledError = handleFirestoreError(error);
  throw handledError;
}

export function handleJobFilterError(error: unknown, jobs: Job[]): Job[] {
  console.error('Error filtering jobs:', error);
  // Return unfiltered jobs as fallback
  return jobs;
}