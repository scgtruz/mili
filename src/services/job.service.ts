import { collection, query, where, getDocs, Timestamp, orderBy, addDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Job } from '@/lib/types/job';

export async function createJob(jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt' | 'status'>) {
  try {
    const jobRef = await addDoc(collection(db, 'jobs'), {
      ...jobData,
      status: 'open',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    
    return jobRef.id;
  } catch (error) {
    console.error('Error creating job:', error);
    throw error;
  }
}

export async function getJobs(filters: { category?: string; zipCode?: string }) {
  try {
    const jobsRef = collection(db, 'jobs');
    let queryConstraints = [];

    // Add filters if they exist
    if (filters.category) {
      queryConstraints.push(where('category', '==', filters.category));
    }
    if (filters.zipCode) {
      queryConstraints.push(where('zipCode', '==', filters.zipCode));
    }

    // Always order by createdAt
    queryConstraints.push(orderBy('createdAt', 'desc'));

    // Create query with all constraints
    const q = query(jobsRef, ...queryConstraints);
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Job[];
  } catch (error) {
    console.error('Error fetching jobs:', error);
    
    // Fallback to basic query if compound query fails
    try {
      const fallbackQuery = query(collection(db, 'jobs'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(fallbackQuery);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Job[];
    } catch (fallbackError) {
      console.error('Fallback query failed:', fallbackError);
      return [];
    }
  }
}