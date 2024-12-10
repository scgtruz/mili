import React from 'react';

export function PrivacyPolicySection() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-display font-bold text-mint-900 mb-6">Privacy Policy</h2>
      <div className="prose prose-lg max-w-none text-mint-700">
        <p>Last updated: 12/6/2024</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-4">1. Information We Collect</h3>
        <p>We collect information that you provide directly to us, including:</p>
        <ul>
          <li>Name and contact information</li>
          <li>Account credentials</li>
          <li>Job posting details</li>
          <li>Service preferences</li>
          <li>Payment information</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">2. How We Use Your Information</h3>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Process your transactions</li>
          <li>Send you service-related communications</li>
          <li>Improve our services</li>
          <li>Protect against fraud and abuse</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">3. Information Sharing</h3>
        <p>We share your information only in the following circumstances:</p>
        <ul>
          <li>With your consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and prevent fraud</li>
          <li>With service providers who assist in our operations</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">4. Data Security</h3>
        <p>
          We implement appropriate technical and organizational measures to protect your personal 
          information against unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">5. Your Rights</h3>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Object to processing of your information</li>
          <li>Withdraw consent</li>
        </ul>
      </div>
    </div>
  );
}