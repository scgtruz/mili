import React, { useState, useEffect } from 'react';
import { JobList } from './components/job-list';
import { FilterPanel } from './components/filters/filter-panel';
import { JobHeader } from './components/jobs/job-header';
import { getJobs } from '@/services/job/job.service';
import { Job } from '@/lib/types/job';
import { Toast } from '@/components/ui/toast';
import { useAuth } from '@/lib/contexts/auth-context';
import { getUserProfile } from '@/services/user/user.service';
import { useJobFilters } from '@/lib/hooks/use-job-filters';
import { useSearchParams } from 'react-router-dom';

export function FindJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const [userRole, setUserRole] = useState<'client' | 'contractor' | 'admin' | null>(null);
  const { filters, updateFilters, resetFilters, setIsLoading: setFiltersLoading } = useJobFilters();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const stateParam = searchParams.get('state');
    if (stateParam) {
      updateFilters({ state: stateParam });
    }
  }, []);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (user) {
        try {
          const profile = await getUserProfile(user.uid);
          if (profile) {
            setUserRole(profile.role);
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      }
    };
    fetchUserRole();
  }, [user]);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const fetchedJobs = await getJobs(filters);
        const filteredJobs = userRole === 'client' 
          ? fetchedJobs.filter(job => job.clientId === user?.uid)
          : fetchedJobs;

        setJobs(filteredJobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Unable to load jobs. Please try again later.');
        setJobs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, [filters, userRole, user]);

  return (
    <div className="min-h-screen bg-mint-100">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {error && (
          <Toast
            message={error}
            type="error"
            onClose={() => setError(null)}
          />
        )}
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3">
            <FilterPanel 
              filters={filters}
              onFilterChange={updateFilters}
              onReset={resetFilters}
              isLoading={isLoading}
              jobs={jobs}
            />
          </aside>
          
          <main className="mt-6 lg:mt-0 lg:col-span-9">
            <JobHeader jobCount={jobs.length} />
            <JobList 
              jobs={jobs}
              isLoading={isLoading}
            />
          </main>
        </div>
      </div>
    </div>
  );
}