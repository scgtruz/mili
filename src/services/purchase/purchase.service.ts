import { collection, addDoc, Timestamp, doc, getDoc } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { handleFirestoreError } from '@/lib/utils/error-handling';
import { Purchase } from '@/lib/types/purchase';

export async function createPurchase(jobId: string, purchaserId: string): Promise<Purchase> {
  try {
    // Get job details
    const jobRef = doc(db, 'jobs', jobId);
    const jobSnap = await getDoc(jobRef);
    
    if (!jobSnap.exists()) {
      throw new Error('Job not found');
    }

    const jobData = jobSnap.data();
    
    // Create purchase record
    const purchaseData = {
      jobId,
      purchaserId,
      purchaseDate: Timestamp.now(),
      jobTitle: jobData.title,
      jobDescription: jobData.description,
      location: {
        state: jobData.state,
        county: jobData.county
      },
      clientContact: {
        name: jobData.clientName,
        email: jobData.clientEmail,
        phone: jobData.clientPhone,
      }
    };

    const purchaseRef = await addDoc(collection(db, 'purchases'), purchaseData);
    
    // Return the complete purchase object
    return { 
      id: purchaseRef.id, 
      ...purchaseData 
    } as Purchase;
  } catch (error) {
    throw handleFirestoreError(error);
  }
}