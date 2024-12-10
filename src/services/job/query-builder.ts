import { Query, where, orderBy, query, QueryConstraint, collection } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { JobFilters } from '@/lib/hooks/use-job-filters';

export function buildJobQuery(filters: JobFilters): Query {
  try {
    const constraints: QueryConstraint[] = [orderBy('createdAt', 'desc')];
    const jobsRef = collection(db, 'jobs');

    // Only add constraints for non-empty values
    if (filters.category?.trim()) {
      constraints.push(where('category', '==', filters.category.trim()));
    }

    if (filters.state?.trim()) {
      constraints.push(where('state', '==', filters.state.trim()));
    }

    return query(jobsRef, ...constraints);
  } catch (error) {
    console.error('Error building query:', error);
    // Return a basic query as fallback
    return query(collection(db, 'jobs'), orderBy('createdAt', 'desc'));
  }
}