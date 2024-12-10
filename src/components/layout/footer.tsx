import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronDown, ChevronUp } from 'lucide-react';

export function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const allPages = [
    { name: 'Home', path: '/' },
    { name: 'Post a Job', path: '/post-job' },
    { name: 'Find Jobs', path: '/find-jobs' },
    { name: 'Lead Generation', path: '/lead-generation' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'About Us', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Profile', path: '/profile' },
    { name: 'Login', path: '/login' },
    { name: 'Sign Up', path: '/signup' },
  ];

  return (
    <footer className="bg-mint-100/50 backdrop-blur-sm border-t border-mint-200/30">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-architect text-mint-800 mb-4">MILI USO</h3>
            <p className="text-sm text-mint-700">
              Your trusted partner in connecting service providers with customers.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-mint-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-mint-700 hover:text-mint-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-mint-700 hover:text-mint-800">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-mint-700 hover:text-mint-800">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-mint-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/post-job" className="text-mint-700 hover:text-mint-800">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/find-jobs" className="text-mint-700 hover:text-mint-800">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/lead-generation" className="text-mint-700 hover:text-mint-800">
                  Lead Generation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-mint-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-mint-700 hover:text-mint-800">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-mint-700 hover:text-mint-800">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-mint-700 hover:text-mint-800">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/legal-notice" className="text-mint-700 hover:text-mint-800">
                  Legal Notice
                </Link>
              </li>
              <li className="flex items-center text-mint-700">
                <Mail className="h-4 w-4 mr-2" />
                support@miliuso.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-mint-200/30">
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="inline-flex items-center px-4 py-2 text-sm text-mint-700 hover:text-mint-800 focus:outline-none"
              >
                All Pages
                {isDropdownOpen ? (
                  <ChevronUp className="ml-2 h-4 w-4" />
                ) : (
                  <ChevronDown className="ml-2 h-4 w-4" />
                )}
              </button>
              
              {isDropdownOpen && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white rounded-lg shadow-lg border border-mint-200 py-2 z-50">
                  {allPages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="block px-4 py-2 text-sm text-mint-700 hover:bg-mint-50 hover:text-mint-800"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <p className="text-sm text-mint-700">
              © {new Date().getFullYear()} MILI USO. All rights reserved.
            </p>
            <p className="text-xs text-mint-600">
              Brought to you by Black Gold Seal Coat
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}