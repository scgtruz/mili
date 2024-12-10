import { doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { updateProfile, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import { db, auth } from '@/config/firebase';
import { UserProfile } from '@/lib/types/user';
import { Purchase } from '@/lib/types/purchase';
import { Job } from '@/lib/types/job';
import { handleFirestoreError } from '@/lib/utils/error-handling';

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as UserProfile;
    }
    return null;
  } catch (error) {
    throw handleFirestoreError(error);
  }
}

export async function updateUserProfile(userId: string, data: Partial<UserProfile>) {
  try {
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      ...data,
      updatedAt: new Date()
    });

    if (data.displayName && auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: data.displayName
      });
    }
  } catch (error) {
    throw handleFirestoreError(error);
  }
}

export async function updateUserPassword(
  currentPassword: string,
  newPassword: string
) {
  try {
    const user = auth.currentUser;
    if (!user || !user.email) throw new Error('No authenticated user');

    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);
  } catch (error) {
    throw handleFirestoreError(error);
  }
}

export async function getUserJobs(userId: string): Promise<Job[]> {
  try {
    const jobsRef = collection(db, 'jobs');
    const q = query(jobsRef, where('clientId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Job[];
  } catch (error) {
    throw handleFirestoreError(error);
  }
}

export async function getUserPurchases(userId: string): Promise<Purchase[]> {
  try {
    const purchasesRef = collection(db, 'purchases');
    const q = query(purchasesRef, where('purchaserId', '==', userId));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Purchase[];
  } catch (error) {
    throw handleFirestoreError(error);
  }
}