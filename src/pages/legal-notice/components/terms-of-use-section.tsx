import React from 'react';

export function TermsOfUseSection() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-display font-bold text-mint-900 mb-6">Terms of Use</h2>
      <div className="prose prose-lg max-w-none text-mint-700">
        <p>Last updated: 12/6/2024</p>

        <h3 className="text-xl font-semibold mt-6 mb-4">1. Acceptance of Terms</h3>
        <p>
          By accessing and using MILI USO, you accept and agree to be bound by these Terms of Use. 
          If you do not agree to these terms, please do not use our services.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">2. User Responsibilities</h3>
        <p>As a user of MILI USO, you agree to:</p>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Maintain the confidentiality of your account</li>
          <li>Use the platform in compliance with all applicable laws</li>
          <li>Not engage in fraudulent or deceptive practices</li>
          <li>Not interfere with the proper functioning of the service</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">3. Service Description</h3>
        <p>
          MILI USO provides a platform connecting outdoor service contractors with potential clients. 
          We do not provide the services directly and are not responsible for the quality of work 
          performed by contractors.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">4. Payment Terms</h3>
        <p>
          Contractors agree to pay the specified fee for each lead purchased. All fees are non-refundable 
          unless otherwise specified. Clients may post jobs at no cost.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">5. Content Guidelines</h3>
        <p>All content posted must be:</p>
        <ul>
          <li>Accurate and truthful</li>
          <li>Free from offensive or inappropriate material</li>
          <li>Respectful of intellectual property rights</li>
          <li>Compliant with our community guidelines</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">6. Limitation of Liability</h3>
        <p>
          MILI USO is not liable for any disputes between contractors and clients, quality of work 
          performed, or damages arising from the use of our platform.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">7. Termination</h3>
        <p>
          We reserve the right to terminate or suspend accounts that violate these terms or engage 
          in inappropriate behavior on our platform.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">8. Changes to Terms</h3>
        <p>
          We may modify these terms at any time. Continued use of the platform after changes 
          constitutes acceptance of the modified terms.
        </p>
      </div>
    </div>
  );
}