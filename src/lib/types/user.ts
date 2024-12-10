import { Timestamp } from 'firebase/firestore';

export interface UserProfile {
  id: string;
  displayName: string;
  email: string;
  role: 'client' | 'contractor' | 'admin';
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface ProfileFormData {
  displayName: string;
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}