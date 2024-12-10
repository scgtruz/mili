import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ContactInfoForm } from '@/components/forms/contact-info-form';
import { ServiceCategoryForm } from '@/components/forms/service-category-form';
import { updateJob } from '@/services/job/job.service';
import { useAuth } from '@/lib/contexts/auth-context';
import { AlertCircle } from 'lucide-react';
import { Job } from '@/lib/types/job';

interface JobFormProps {
  initialData: Job;
  mode: 'edit';
}

export function JobForm({ initialData, mode }: JobFormProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: initialData.title,
    description: initialData.description,
    category: initialData.category,
    zipCode: initialData.zipCode,
    clientName: initialData.clientName,
    clientEmail: initialData.clientEmail,
    clientPhone: initialData.clientPhone,
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      setError('You must be logged in to update a job');
      return;
    }

    if (user.uid !== initialData.clientId) {
      setError('You do not have permission to edit this job');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await updateJob(initialData.id!, {
        ...formData,
        clientId: user.uid,
      });
      navigate('/find-jobs');
    } catch (error) {
      console.error('Error updating job:', error);
      setError(error instanceof Error ? error.message : 'Failed to update job. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center text-red-800">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Contact Information</h2>
        <ContactInfoForm 
          formData={formData} 
          onChange={handleChange} 
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <ServiceCategoryForm 
          category={formData.category} 
          onChange={handleChange} 
        />

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
            ZIP Code
          </label>
          <input
            type="text"
            id="zipCode"
            value={formData.zipCode}
            onChange={(e) => handleChange('zipCode', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
            pattern="[0-9]{5}"
            title="Please enter a valid 5-digit ZIP code"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => navigate('/find-jobs')}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Saving...' : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
}