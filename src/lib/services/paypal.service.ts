import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { db } from '@/config/firebase';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { LEAD_PRICE } from '@/lib/utils/constants';

const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test';

export const paypalOptions = {
  "client-id": PAYPAL_CLIENT_ID,
  currency: "USD",
  intent: "capture"
};

export async function createOrder() {
  return {
    purchase_units: [{
      amount: {
        value: LEAD_PRICE.toFixed(2)
      },
      description: "Job Lead Purchase"
    }]
  };
}

export async function recordPurchase(jobId: string, userId: string) {
  const purchaseRef = doc(db, 'purchasedLeads', `${jobId}_${userId}`);
  await setDoc(purchaseRef, {
    jobId,
    userId,
    purchaseDate: Timestamp.now(),
    amount: LEAD_PRICE,
    status: 'completed'
  });
}