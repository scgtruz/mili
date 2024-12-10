import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LEAD_PRICE } from '@/lib/utils/constants';
import { useAuth } from '@/lib/contexts/auth-context';
import { createPurchase } from '@/services/purchase/purchase.service';

interface PayPalButtonProps {
  jobId: string;
  onSuccess: () => void;
  onError: (error: Error) => void;
}

export function PayPalButton({ jobId, onSuccess, onError }: PayPalButtonProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      // Submit the form normally for PayPal processing
      const form = e.target as HTMLFormElement;
      form.submit();

      // Record the purchase in our database
      await createPurchase(jobId, user.uid);
      
      // Call success callback
      onSuccess();

      // Navigate to profile page
      navigate('/profile');
    } catch (error) {
      onError(error instanceof Error ? error : new Error('Payment processing failed'));
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <form 
        action="https://www.paypal.com/ncp/payment/Z2ESNU7K3D3US" 
        method="post" 
        target="_top" 
        className="flex flex-col items-center gap-2"
        onSubmit={handleFormSubmit}
      >
        <button
          type="submit"
          className="min-w-[11.625rem] h-8 px-8 font-bold text-sm leading-[1.125rem] text-white bg-black rounded-3xl hover:bg-gray-800 transition-colors"
        >
          Get Lead Now
        </button>
        <img 
          src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" 
          alt="Accepted payment methods" 
          className="h-6"
        />
        <div className="text-sm text-gray-600 flex items-center gap-1">
          Powered by 
          <img 
            src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" 
            alt="PayPal" 
            className="h-3.5"
          />
        </div>
      </form>
    </div>
  );
}