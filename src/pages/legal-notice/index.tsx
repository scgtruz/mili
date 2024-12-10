import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LegalNoticeSection } from './components/legal-notice-section';
import { PrivacyPolicySection } from './components/privacy-policy-section';
import { TermsOfUseSection } from './components/terms-of-use-section';
import { CookiePolicySection } from './components/cookie-policy-section';

export function LegalNotice() {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleAccept = () => {
    if (!accepted) {
      return;
    }
    // Store acceptance in localStorage
    localStorage.setItem('legal-notice-accepted', 'true');
    navigate('/signup');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50/50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <PrivacyPolicySection />
          <TermsOfUseSection />
          <CookiePolicySection />
          <LegalNoticeSection 
            accepted={accepted}
            onAcceptChange={setAccepted}
          />
        </div>

        <div className="mt-8 flex justify-end space-x-4">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="border-mint-200"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAccept}
            disabled={!accepted}
            className="bg-mint-600 hover:bg-mint-700 text-white disabled:bg-mint-300"
          >
            Accept & Continue
          </Button>
        </div>
      </div>
    </div>
  );
}