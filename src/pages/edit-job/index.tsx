import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { JobForm } from './components/job-form';
import { getJobById } from '@/services/job/job.service';
import { useAuth } from '@/lib/contexts/auth-context';
import { Toast } from '@/components/ui/toast';

export function EditJob() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [job, setJob] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      if (!jobId || !user) return;

      try {
        const jobData = await getJobById(jobId);
        
        if (!jobData) {
          setError('Job not found');
          return;
        }

        if (jobData.clientId !== user.uid) {
          setError('You do not have permission to edit this job');
          return;
        }

        setJob(jobData);
      } catch (err) {
        setError('Failed to load job details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchJob();
  }, [jobId, user]);

  if (isLoading) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="h-64 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Toast message={error} type="error" onClose={() => navigate('/find-jobs')} />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Edit Job</h1>
      {job && <JobForm initialData={job} mode="edit" />}
    </div>
  );
}