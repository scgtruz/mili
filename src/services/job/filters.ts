import { Job } from '@/lib/types/job';
import { JobFilters } from '@/lib/hooks/use-job-filters';
import { Timestamp } from 'firebase/firestore';
import { searchInText } from '@/lib/utils';

function getDateFilter(dateRange: string): Date | null {
  const now = new Date();
  
  switch (dateRange) {
    case 'today':
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return today;
    case 'week':
      const weekAgo = new Date(now);
      weekAgo.setDate(weekAgo.getDate() - 7);
      return weekAgo;
    case 'month':
      const monthAgo = new Date(now);
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      return monthAgo;
    default:
      return null;
  }
}

export function filterJobs(jobs: Job[], filters: JobFilters): Job[] {
  try {
    if (!jobs || !Array.isArray(jobs)) return [];

    return jobs.filter(job => {
      // County filter
      if (filters.county?.trim()) {
        if (job.county.toLowerCase() !== filters.county.toLowerCase()) {
          return false;
        }
      }

      // Keyword search
      if (filters.keywords?.trim()) {
        const searchTerms = filters.keywords
          .split(' ')
          .map(term => term.trim())
          .filter(Boolean);
        
        if (searchTerms.length > 0) {
          const searchableText = `${job.title} ${job.description} ${job.category} ${job.county} ${job.state}`.toLowerCase();
          if (!searchInText(searchTerms, searchableText)) {
            return false;
          }
        }
      }

      // Date range filter
      if (filters.dateRange && filters.dateRange !== 'all') {
        const dateFilter = getDateFilter(filters.dateRange);
        if (dateFilter && job.createdAt) {
          const jobDate = job.createdAt instanceof Timestamp 
            ? job.createdAt.toDate() 
            : new Date(job.createdAt);
          
          if (jobDate < dateFilter) {
            return false;
          }
        }
      }

      return true;
    });
  } catch (error) {
    console.error('Error filtering jobs:', error);
    return jobs; // Return original jobs if filtering fails
  }
}