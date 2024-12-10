import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { Job } from '@/lib/types/job';
import { handleFirestoreError } from '@/lib/utils/error-handling';
import { getZipCodeFromStateCounty } from '@/lib/utils/geo';

export async function createJob(jobData: Omit<Job, 'id' | 'createdAt' | 'updatedAt' | 'status'>) {
  try {
    // Generate ZIP code from state and county
    const zipCode = await getZipCodeFromStateCounty(jobData.state, jobData.county);

    // Create the job with a generated title based on type and category
    const jobRef = await addDoc(collection(db, 'jobs'), {
      ...jobData,
      zipCode,
      status: 'open',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    
    return jobRef.id;
  } catch (error) {
    throw handleFirestoreError(error);
  }
}