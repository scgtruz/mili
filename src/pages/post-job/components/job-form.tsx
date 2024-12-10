import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ContactInfoForm } from './contact-info-form';
import { LocationSelect } from '@/components/forms/location-select';
import { JobDetailsForm } from '@/components/forms/job-details-form';
import { createJob } from '@/services/job/create-job.service';
import { useAuth } from '@/lib/contexts/auth-context';
import { AlertCircle } from 'lucide-react';
import { JobType } from '@/lib/types/job';

export function JobForm() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    jobType: '' as JobType,
    description: '',
    category: '',
    state: '',
    county: '',
    zipCode: '',
    clientName: user?.displayName || '',
    clientEmail: user?.email || '',
    clientPhone: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('You must be logged in to post a job');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await createJob({
        ...formData,
        title: `${formData.jobType} ${formData.category} Job`, // Generate title from type and category
        clientId: user.uid,
        services: [],
      });
      navigate('/');
    } catch (error) {
      console.error('Error submitting job:', error);
      setError(error instanceof Error ? error.message : 'Failed to create job. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center text-red-800">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <div className="bg-mint-50/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-mint-200">
        <h2 className="text-lg font-display font-medium text-mint-900 mb-6">Contact Information</h2>
        <ContactInfoForm 
          formData={formData} 
          onChange={handleChange} 
        />
      </div>

      <div className="bg-mint-50/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-mint-200">
        <LocationSelect
          state={formData.state}
          county={formData.county}
          onChange={(field, value) => handleChange(field, value)}
        />
      </div>

      <div className="bg-mint-50/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-mint-200">
        <h2 className="text-lg font-display font-medium text-mint-900 mb-6">Job Details</h2>
        <JobDetailsForm 
          formData={formData}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => navigate('/')}
          disabled={isSubmitting}
          className="bg-white hover:bg-mint-50"
        >
          Cancel
        </Button>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-mint-600 hover:bg-mint-700 text-white"
        >
          {isSubmitting ? 'Posting...' : 'Post Job'}
        </Button>
      </div>
    </form>
  );
}