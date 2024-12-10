import React from 'react';

export function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50/50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-mint-900 mb-8">Terms of Use</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-mint-700">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-mint-700">
              By accessing and using MILI USO, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">2. User Responsibilities</h2>
            <p className="text-mint-700">As a user of MILI USO, you agree to:</p>
            <ul className="list-disc pl-6 text-mint-700">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use the platform in compliance with all applicable laws</li>
              <li>Not engage in fraudulent or deceptive practices</li>
              <li>Not interfere with the proper functioning of the service</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">3. Service Description</h2>
            <p className="text-mint-700">
              MILI USO provides a platform connecting outdoor service contractors with potential clients. We do not provide the services directly and are not responsible for the quality of work performed by contractors.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">4. Payment Terms</h2>
            <p className="text-mint-700">
              Contractors agree to pay the specified fee for each lead purchased. All fees are non-refundable unless otherwise specified. Clients may post jobs at no cost.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">5. Content Guidelines</h2>
            <p className="text-mint-700">All content posted must be:</p>
            <ul className="list-disc pl-6 text-mint-700">
              <li>Accurate and truthful</li>
              <li>Free from offensive or inappropriate material</li>
              <li>Respectful of intellectual property rights</li>
              <li>Compliant with our community guidelines</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-mint-700">
              MILI USO is not liable for any disputes between contractors and clients, quality of work performed, or damages arising from the use of our platform.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">7. Termination</h2>
            <p className="text-mint-700">
              We reserve the right to terminate or suspend accounts that violate these terms or engage in inappropriate behavior on our platform.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">8. Changes to Terms</h2>
            <p className="text-mint-700">
              We may modify these terms at any time. Continued use of the platform after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">9. Contact Information</h2>
            <p className="text-mint-700">
              For questions about these Terms of Use, please contact us at:
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