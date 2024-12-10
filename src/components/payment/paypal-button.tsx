import React from 'react';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useAuth } from '@/lib/contexts/auth-context';
import { Toast } from '@/components/ui/toast';
import { LEAD_PRICE } from '@/lib/utils/constants';

interface PayPalButtonProps {
  jobId: string;
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export function PayPalButton({ jobId, onSuccess, onError }: PayPalButtonProps) {
  const { user } = useAuth();
  const [{ isPending }] = usePayPalScriptReducer();

  if (isPending) {
    return <div className="animate-pulse h-10 bg-gray-200 rounded"></div>;
  }

  return (
    <PayPalButtons
      style={{
        layout: "horizontal",
        color: "gold",
        shape: "rect",
        label: "pay"
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: LEAD_PRICE.toFixed(2),
                currency_code: "USD"
              },
              description: `Job Lead Purchase - ${jobId}`,
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        try {
          if (!user) {
            throw new Error('User must be logged in to complete purchase');
          }

          const order = await actions.order?.capture();
          if (order) {
            await recordPurchase(jobId, user.uid, order.id);
            onSuccess();
          }
        } catch (error) {
          onError(error instanceof Error ? error : new Error('Payment failed'));
        }
      }}
      onError={(err) => {
        console.error('PayPal error:', err);
        onError(err instanceof Error ? err : new Error('Payment failed'));
      }}
    />
  );
}

async function recordPurchase(jobId: string, userId: string, orderId: string) {
  const purchaseRef = doc(db, 'purchases', `${jobId}_${userId}`);
  await setDoc(purchaseRef, {
    jobId,
    userId,
    orderId,
    amount: LEAD_PRICE,
    purchaseDate: Timestamp.now(),
    status: 'completed'
  });
}