import React from 'react';

export function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-mint-50/50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-bold text-mint-900 mb-8">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-mint-700">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">1. What Are Cookies</h2>
            <p className="text-mint-700">
              Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us make your experience better by:
            </p>
            <ul className="list-disc pl-6 text-mint-700">
              <li>Remembering your preferences and settings</li>
              <li>Keeping you signed in to your account</li>
              <li>Understanding how you use our website</li>
              <li>Improving our services based on your behavior</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-mint-800">Essential Cookies</h3>
                <p className="text-mint-700">Required for the website to function properly. These cannot be disabled.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-mint-800">Functional Cookies</h3>
                <p className="text-mint-700">Remember your preferences and personalize your experience.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-mint-800">Analytics Cookies</h3>
                <p className="text-mint-700">Help us understand how visitors interact with our website.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-mint-800">Marketing Cookies</h3>
                <p className="text-mint-700">Track your activity across websites to deliver relevant advertisements.</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">3. Managing Cookies</h2>
            <p className="text-mint-700">
              You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">4. Third-Party Cookies</h2>
            <p className="text-mint-700">
              We use third-party services that may set cookies on your device. These include:
            </p>
            <ul className="list-disc pl-6 text-mint-700">
              <li>Google Analytics for website analytics</li>
              <li>Firebase for authentication and database services</li>
              <li>Payment processors for secure transactions</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">5. Updates to This Policy</h2>
            <p className="text-mint-700">
              We may update this Cookie Policy from time to time. We encourage you to periodically review this page for the latest information about our cookie practices.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-mint-900 mb-4">6. Contact Us</h2>
            <p className="text-mint-700">
              If you have any questions about our Cookie Policy, please contact us at:
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