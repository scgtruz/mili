import { Query, collection, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { JobFilters } from '@/lib/hooks/use-job-filters';

function getDateRangeFilter(dateRange: string): Date | null {
  const now = new Date();
  switch (dateRange) {
    case 'today':
      now.setHours(0, 0, 0, 0);
      return now;
    case 'week':
      now.setDate(now.getDate() - 7);
      return now;
    case 'month':
      now.setMonth(now.getMonth() - 1);
      return now;
    default:
      return null;
  }
}

export function buildJobQuery(filters: JobFilters): Query {
  const jobsRef = collection(db, 'jobs');
  const constraints = [];

  // Always add the base ordering
  constraints.push(orderBy('createdAt', 'desc'));

  // Add category filter if specified
  if (filters.category && filters.category !== '') {
    constraints.push(where('category', '==', filters.category));
  }

  // Add location filters if specified
  if (filters.state && filters.state !== '') {
    constraints.push(where('state', '==', filters.state));
  }

  // Add date range filter if specified
  if (filters.dateRange && filters.dateRange !== 'all') {
    const dateFilter = getDateRangeFilter(filters.dateRange);
    if (dateFilter) {
      constraints.push(where('createdAt', '>=', Timestamp.fromDate(dateFilter)));
    }
  }

  return query(jobsRef, ...constraints);
}