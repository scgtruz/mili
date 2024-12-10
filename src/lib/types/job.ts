import { Timestamp } from 'firebase/firestore';

export type JobType = 'residential' | 'commercial';

export interface Job {
  id?: string;
  title: string;
  jobType: JobType;
  description: string;
  category: string;
  state: string;
  county: string;
  zipCode: string;
  services: string[];
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  status: 'open' | 'in-progress' | 'completed';
  createdAt: Timestamp;
  updatedAt: Timestamp;
}