import { useState } from 'react';
import { useAuth } from '@/lib/contexts/auth-context';
import { recordPurchase } from '@/lib/services/paypal.service';

export function usePayment(jobId: string) {
  const [showPayPal, setShowPayPal] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAuth();

  const handlePurchaseClick = () => {
    if (!user) {
      setError('Please log in to purchase job leads');
      return;
    }
    setShowPayPal(true);
  };

  const handlePaymentSuccess = async () => {
    setIsProcessing(true);
    try {
      if (user) {
        await recordPurchase(jobId, user.uid);
        setShowPayPal(false);
        setError(null);
      }
    } catch (error) {
      setError('Failed to record purchase. Please contact support.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentError = (error: Error) => {
    setError('Payment failed. Please try again.');
    setShowPayPal(false);
    console.error('Payment error:', error);
  };

  return {
    showPayPal,
    error,
    isProcessing,
    handlePurchaseClick,
    handlePaymentSuccess,
    handlePaymentError,
  };
}