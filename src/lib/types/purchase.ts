import { Timestamp } from 'firebase/firestore';

export interface Purchase {
  id: string;
  jobId: string;
  purchaserId: string;
  purchaseDate: Timestamp;
  jobTitle: string;
  jobDescription: string;
  location?: {
    state: string;
    county: string;
  };
  clientContact: {
    name: string;
    email: string;
    phone: string;
  };
}