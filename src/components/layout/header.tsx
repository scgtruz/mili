import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, User, LogOut, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { useAuth } from '@/lib/contexts/auth-context';
import { auth } from '@/config/firebase';
import { getUserProfile } from '@/services/user/user.service';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) return;
      const profile = await getUserProfile(user.uid);
      setIsAdmin(profile?.role === 'admin');
    };

    checkAdminStatus();
  }, [user]);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSignUpClick = () => {
    const legalNoticeAccepted = localStorage.getItem('legal-notice-accepted');
    if (!legalNoticeAccepted) {
      navigate('/legal-notice');
    } else {
      navigate('/signup');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/50 backdrop-blur-sm border-b border-gray-200/30 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-3xl sm:text-4xl font-architect text-mint-700 hover:text-mint-800 transition-colors">
              MILI USO
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/post-job" className="text-mint-600 hover:text-mint-800">
              Post a Job
            </Link>
            <Link to="/find-jobs" className="text-mint-600 hover:text-mint-800">
              Find Jobs
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile" className="flex items-center space-x-2 px-3 py-1 bg-mint-50/80 rounded-full hover:bg-mint-100/80 transition-colors">
                  <User className="h-4 w-4 text-mint-500" />
                  <span className="text-sm text-mint-700">
                    {user.displayName || user.email?.split('@')[0] || 'User'}
                  </span>
                  {isAdmin && (
                    <Link 
                      to="/admin"
                      className="ml-2 flex items-center text-mint-600 hover:text-mint-700"
                    >
                      <Shield className="h-4 w-4" />
                    </Link>
                  )}
                </Link>
                <Button
                  variant="outline"
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 bg-white/80 hover:bg-white"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="bg-white/80 hover:bg-white">Log In</Button>
                </Link>
                <Button onClick={handleSignUpClick} className="bg-mint-500/90 hover:bg-mint-600">
                  Sign Up
                </Button>
              </>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-mint-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/post-job"
                className="text-mint-600 hover:text-mint-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Post a Job
              </Link>
              <Link
                to="/find-jobs"
                className="text-mint-600 hover:text-mint-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Find Jobs
              </Link>
              {user ? (
                <>
                  <div className="flex items-center space-x-2">
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="h-4 w-4 text-mint-500" />
                      <span className="text-mint-700">
                        {user.displayName || user.email?.split('@')[0] || 'User'}
                      </span>
                    </Link>
                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="flex items-center text-mint-600 hover:text-mint-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Shield className="h-4 w-4" />
                      </Link>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleSignOut();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-center space-x-2"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                    <Button variant="outline" className="w-full">Log In</Button>
                  </Link>
                  <Button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleSignUpClick();
                    }}
                    className="w-full"
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}