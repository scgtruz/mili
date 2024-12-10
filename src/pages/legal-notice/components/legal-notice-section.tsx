import React from 'react';
import { AlertCircle } from 'lucide-react';

interface LegalNoticeSectionProps {
  accepted: boolean;
  onAcceptChange: (accepted: boolean) => void;
}

export function LegalNoticeSection({ accepted, onAcceptChange }: LegalNoticeSectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
      <h1 className="text-3xl font-display font-bold text-mint-900 mb-6">Legal Notice</h1>
      
      <div className="prose prose-lg max-w-none text-mint-700 space-y-6">
        <p>
          MILI USO is an independent platform designed to connect clients with a network of outdoor service contractors. 
          Our role is to facilitate communication and provide a space where clients can post service requirements and 
          contractors can access these opportunities. We do not provide contracting services directly and do not act as 
          an agent, representative, or guarantor for any party.
        </p>

        <p>
          It is important to note that MILI USO does not guarantee the quality, safety, or legality of any services 
          performed by contractors, nor do we ensure the accuracy of any information provided by users. Any agreements, 
          contracts, or arrangements entered into between clients and contractors are strictly between those parties. 
          MILI USO is not responsible for resolving disputes, negotiating terms, or addressing issues related to 
          workmanship, pricing, or project timelines.
        </p>

        <p>
          Users of the platform are strongly encouraged to conduct their own due diligence. This includes verifying 
          credentials, certifications, and insurance coverage; confirming licensing requirements; and ensuring that all 
          necessary permits are secured prior to the commencement of any work. We advise clients to carefully review 
          contractor information and establish clear terms to avoid misunderstandings or complications.
        </p>

        <p>
          Contractors are solely responsible for their work quality, warranties, insurance coverage, compliance with 
          local regulations, permits, licenses, worker safety, and any guarantees provided to clients. Additionally, 
          contractors must maintain appropriate insurance coverage, handle their own worker's compensation, liability 
          claims, and fulfill any promises or guarantees made to clients.
        </p>

        <div className="bg-mint-50 p-6 rounded-lg mt-8">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-6 w-6 text-mint-600 flex-shrink-0 mt-1" />
            <p className="text-mint-800 font-medium">
              By using MILI USO, you acknowledge and accept these terms, and you agree that the platform operates 
              solely as a neutral facilitator, with no liability for the actions, omissions, or outcomes of any 
              interactions between clients and contractors.
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3 py-4">
          <input
            type="checkbox"
            id="accept-terms"
            checked={accepted}
            onChange={(e) => onAcceptChange(e.target.checked)}
            className="h-5 w-5 rounded border-mint-300 text-mint-600 focus:ring-mint-500"
          />
          <label htmlFor="accept-terms" className="text-mint-800 font-medium">
            I have read and accept the terms outlined in this legal notice
          </label>
        </div>
      </div>
    </div>
  );
}