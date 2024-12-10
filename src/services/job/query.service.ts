import { Query, collection, query, where, orderBy, QueryConstraint } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { JobFilters } from '@/lib/hooks/use-job-filters';

export function createJobQuery(filters: JobFilters): Query {
  const jobsRef = collection(db, 'jobs');
  const constraints: QueryConstraint[] = [];

  // Always add createdAt ordering
  constraints.push(orderBy('createdAt', 'desc'));

  // Add category filter if specified
  if (filters.category?.trim()) {
    constraints.push(where('category', '==', filters.category.trim()));
  }

  return query(jobsRef, ...constraints);
}