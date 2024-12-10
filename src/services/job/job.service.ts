import { getDocs, Timestamp, doc, getDoc, collection, updateDoc, addDoc, query, orderBy } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Job } from '@/lib/types/job';
import { JobFilters } from '@/lib/hooks/use-job-filters';
import { filterJobs } from './filters.service';

export async function getJobs(filters: JobFilters): Promise<Job[]> {
  try {
    // Create a simple base query with just ordering
    const jobsRef = collection(db, 'jobs');
    const baseQuery = query(jobsRef, orderBy('createdAt', 'desc'));
    
    // Execute query
    const querySnapshot = await getDocs(baseQuery);
    
    // Convert documents to Job objects
    const jobs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Job[];

    // Apply filters in memory
    return filterJobs(jobs, filters);
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return []; // Return empty array instead of throwing
  }
}

export async function getJobById(jobId: string): Promise<Job | null> {
  try {
    const jobRef = doc(db, 'jobs', jobId);
    const docSnap = await getDoc(jobRef);

    if (!docSnap.exists()) {
      return null;
    }

    return {
      id: docSnap.id,
      ...docSnap.data()
    } as Job;
  } catch (error) {
    console.error('Error fetching job:', error);
    return null;
  }
}

export async function createJob(jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt' | 'status'>): Promise<string> {
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
    throw new Error('Failed to create job');
  }
}

export async function updateJob(jobId: string, jobData: Partial<Job>): Promise<void> {
  try {
    const jobRef = doc(db, 'jobs', jobId);
    await updateDoc(jobRef, {
      ...jobData,
      updatedAt: Timestamp.now()
    });
  } catch (error) {
    console.error('Error updating job:', error);
    throw new Error('Failed to update job');
  }
}