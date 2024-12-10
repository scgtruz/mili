import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50/50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-mint-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-mint-700">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">1. Information We Collect</h2>
            <p className="text-mint-700">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-mint-700">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Job posting details</li>
              <li>Service preferences</li>
              <li>Payment information</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-mint-700">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-mint-700">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you service-related communications</li>
              <li>Improve our services</li>
              <li>Protect against fraud and abuse</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">3. Information Sharing</h2>
            <p className="text-mint-700">
              We share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-mint-700">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers who assist in our operations</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">4. Data Security</h2>
            <p className="text-mint-700">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">5. Your Rights</h2>
            <p className="text-mint-700">You have the right to:</p>
            <ul className="list-disc pl-6 text-mint-700">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">6. Contact Us</h2>
            <p className="text-mint-700">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:support@miliuso.com" className="text-mint-500 hover:text-mint-600">
                support@miliuso.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}