import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/header';
import { Footer } from './components/layout/footer';
import { Home } from './pages/home';
import { PostJob } from './pages/post-job';
import { EditJob } from './pages/edit-job';
import { FindJobs } from './pages/find-jobs';
import { Profile } from './pages/profile';
import { Login } from './pages/auth/login';
import { SignUp } from './pages/auth/signup';
import { LeadGeneration } from './pages/lead-generation';
import { HowItWorks } from './pages/how-it-works';
import { Pricing } from './pages/pricing';
import { About } from './pages/about';
import { PrivacyPolicy } from './pages/privacy-policy';
import { Terms } from './pages/terms';
import { CookiePolicy } from './pages/cookie-policy';
import { LegalNotice } from './pages/legal-notice';
import { AuthProvider } from './lib/contexts/auth-context';
import { PayPalProvider } from './lib/contexts/paypal-context';

function App() {
  return (
    <AuthProvider>
      <PayPalProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow pt-24">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/post-job" element={<PostJob />} />
                <Route path="/edit-job/:jobId" element={<EditJob />} />
                <Route path="/find-jobs" element={<FindJobs />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/legal-notice" element={<LegalNotice />} />
                <Route path="/lead-generation" element={<LeadGeneration />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/cookie-policy" element={<CookiePolicy />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </PayPalProvider>
    </AuthProvider>
  );
}

export default App;