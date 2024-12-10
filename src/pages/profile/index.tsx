import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileForm } from './components/profile-form';
import { PurchasedJobsHistory } from './components/purchased-jobs-history';
import { useAuth } from '@/lib/contexts/auth-context';
import { getUserProfile, updateUserProfile, updateUserPassword, getUserJobs, getUserPurchases } from '@/services/user/user.service';
import { Job } from '@/lib/types/job';
import { Purchase } from '@/lib/types/purchase';
import { UserProfile, ProfileFormData } from '@/lib/types/user';
import { JobCard } from '@/pages/find-jobs/components/job-card';

export function Profile() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [userJobs, setUserJobs] = useState<Job[]>([]);
  const [userPurchases, setUserPurchases] = useState<Purchase[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const loadProfile = async () => {
      try {
        const userProfile = await getUserProfile(user.uid);
        if (userProfile) {
          setProfile(userProfile);
          
          // Load jobs or purchases based on user role
          if (userProfile.role === 'client') {
            const jobs = await getUserJobs(user.uid);
            setUserJobs(jobs);
          } else if (userProfile.role === 'contractor') {
            const purchases = await getUserPurchases(user.uid);
            setUserPurchases(purchases);
          }
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to load profile');
      }
    };

    loadProfile();
  }, [user, navigate]);

  const handleProfileUpdate = async (data: ProfileFormData) => {
    if (!user) return;
    
    setIsLoading(true);
    setError(null);

    try {
      // Update profile
      await updateUserProfile(user.uid, {
        displayName: data.displayName,
      });

      // Update password if provided
      if (data.currentPassword && data.newPassword) {
        await updateUserPassword(data.currentPassword, data.newPassword);
      }

      // Refresh profile data
      const updatedProfile = await getUserProfile(user.uid);
      setProfile(updatedProfile);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-mint-50/50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-mint-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mint-100/50">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-display font-bold text-mint-900 mb-8">Profile Settings</h1>
          
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 mb-8 border border-mint-200/50">
            <ProfileForm
              initialData={{ displayName: profile.displayName }}
              onSubmit={handleProfileUpdate}
              isLoading={isLoading}
              error={error}
            />
          </div>

          {profile.role === 'client' && userJobs.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-display font-semibold text-mint-900 mb-6">Your Posted Jobs</h2>
              <div className="space-y-6">
                {userJobs.map(job => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          )}

          {profile.role === 'contractor' && (
            <div className="mt-8">
              <h2 className="text-2xl font-display font-semibold text-mint-900 mb-6">Purchased Leads History</h2>
              <PurchasedJobsHistory purchases={userPurchases} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}