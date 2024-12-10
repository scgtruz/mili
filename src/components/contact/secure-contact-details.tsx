import React, { useState, useEffect } from 'react';
import { useAuth } from '@/lib/contexts/auth-context';
import { Lock, Unlock, User, Phone, Mail, MapPin, AlertCircle, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactInfo } from '@/lib/types/contact';
import { cn } from '@/lib/utils';
import { doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { LEAD_PRICE } from '@/lib/utils/constants';
import { PayPalButton } from '@/components/ui/paypal-button';

interface SecureContactDetailsProps {
  contactInfo: ContactInfo;
  jobId: string;
  clientId: string;
  className?: string;
}

export function SecureContactDetails({ 
  contactInfo, 
  jobId, 
  clientId,
  className 
}: SecureContactDetailsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userRole, setUserRole] = useState<'client' | 'contractor' | 'admin' | null>(null);
  const [showPayPal, setShowPayPal] = useState(false);
  const [hasPurchased, setHasPurchased] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUserRole = async () => {
      if (!user) return;
      
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserRole(userDoc.data().role);
        }
      } catch (err) {
        console.error('Error fetching user role:', err);
      }
    };

    const checkPurchaseStatus = async () => {
      if (!user) return;

      try {
        const purchasesRef = collection(db, 'purchases');
        const q = query(
          purchasesRef, 
          where('jobId', '==', jobId),
          where('purchaserId', '==', user.uid)
        );
        const querySnapshot = await getDocs(q);
        setHasPurchased(!querySnapshot.empty);
        setIsVisible(!querySnapshot.empty);
      } catch (err) {
        console.error('Error checking purchase status:', err);
      }
    };

    fetchUserRole();
    checkPurchaseStatus();
  }, [user, jobId]);

  const handleToggleVisibility = () => {
    if (!user) {
      setError('Please log in to view contact details');
      return;
    }

    if (hasPurchased) {
      setIsVisible(!isVisible);
      return;
    }

    if (user.uid === clientId) {
      setIsVisible(!isVisible);
      return;
    }

    if (userRole === 'contractor') {
      setShowPayPal(true);
    } else {
      setError('You must be a contractor to purchase leads');
    }
  };

  const handlePaymentSuccess = async () => {
    try {
      if (!user) throw new Error('User must be logged in');
      setHasPurchased(true);
      setIsVisible(true);
      setShowPayPal(false);
      setError(null);
    } catch (err) {
      console.error('Error recording purchase:', err);
      setError('Failed to process purchase. Please try again.');
    }
  };

  const handlePaymentError = (error: Error) => {
    console.error('Payment error:', error);
    setError('Payment failed. Please try again.');
    setShowPayPal(false);
  };

  return (
    <div className={cn('rounded-lg border border-gray-200', className)}>
      <div className="p-4">
        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md text-sm flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            {error}
          </div>
        )}

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-600">
            {isVisible ? (
              <Unlock className="h-5 w-5 text-green-600 mr-2" />
            ) : (
              <Lock className="h-5 w-5 text-gray-400 mr-2" />
            )}
            <span className="text-sm font-medium">
              {isVisible ? 'Contact Details Visible' : 'Contact Details Hidden'}
            </span>
          </div>
          {!showPayPal && (
            <Button
              onClick={handleToggleVisibility}
              variant={isVisible ? 'outline' : 'primary'}
              size="sm"
              className="flex items-center gap-2"
            >
              {!isVisible && !hasPurchased && <DollarSign className="h-4 w-4" />}
              {isVisible ? 'Hide Details' : hasPurchased ? 'Show Details' : `Purchase Lead - $${LEAD_PRICE.toFixed(2)}`}
            </Button>
          )}
        </div>

        {showPayPal && (
          <div className="mb-4">
            <PayPalButton
              jobId={jobId}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          </div>
        )}

        <div
          className={cn(
            'space-y-3 transition-all duration-300',
            isVisible
              ? 'opacity-100 transform translate-y-0'
              : 'opacity-0 transform -translate-y-2 pointer-events-none'
          )}
        >
          <div className="flex items-center text-gray-600">
            <User className="h-4 w-4 mr-3" />
            <span>{contactInfo.fullName}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="h-4 w-4 mr-3" />
            <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-600">
              {contactInfo.phone}
            </a>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="h-4 w-4 mr-3" />
            <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-600">
              {contactInfo.email}
            </a>
          </div>
          {contactInfo.address && (
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-3" />
              <span>{contactInfo.address}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}