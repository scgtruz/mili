import React from 'react';

export function CookiePolicySection() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-display font-bold text-mint-900 mb-6">Cookie Policy</h2>
      <div className="prose prose-lg max-w-none text-mint-700">
        <p>Last updated: 12/6/2024</p>

        <h3 className="text-xl font-semibold mt-6 mb-4">1. What Are Cookies</h3>
        <p>
          Cookies are small text files that are stored on your computer or mobile device when you 
          visit our website. They help us make your experience better by:
        </p>
        <ul>
          <li>Remembering your preferences and settings</li>
          <li>Keeping you signed in to your account</li>
          <li>Understanding how you use our website</li>
          <li>Improving our services based on your behavior</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">2. Types of Cookies We Use</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold">Essential Cookies</h4>
            <p>Required for the website to function properly. These cannot be disabled.</p>
          </div>
          <div>
            <h4 className="font-semibold">Functional Cookies</h4>
            <p>Remember your preferences and personalize your experience.</p>
          </div>
          <div>
            <h4 className="font-semibold">Analytics Cookies</h4>
            <p>Help us understand how visitors interact with our website.</p>
          </div>
          <div>
            <h4 className="font-semibold">Marketing Cookies</h4>
            <p>Track your activity across websites to deliver relevant advertisements.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-4">3. Managing Cookies</h3>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are 
          already on your computer and you can set most browsers to prevent them from being placed. 
          However, if you do this, you may have to manually adjust some preferences every time you 
          visit a site and some services and functionalities may not work.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-4">4. Third-Party Cookies</h3>
        <p>We use third-party services that may set cookies on your device. These include:</p>
        <ul>
          <li>Google Analytics for website analytics</li>
          <li>Firebase for authentication and database services</li>
          <li>Payment processors for secure transactions</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">5. Updates to This Policy</h3>
        <p>
          We may update this Cookie Policy from time to time. We encourage you to periodically review 
          this page for the latest information about our cookie practices.
        </p>
      </div>
    </div>
  );
}