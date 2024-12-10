import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobFormData } from '@/lib/utils/validation';
import { createJob } from '@/services/job.service';
import { useAuth } from '@/lib/contexts/auth-context';

const initialFormData: JobFormData = {
  title: '',
  description: '',
  category: '',
  zipCode: '',
  clientName: '',
  clientEmail: '',
  clientPhone: '',
};

export function useJobForm() {
  const [formData, setFormData] = useState<JobFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChange = (field: keyof JobFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
        clientId: user.uid,
        services: [],
      });
      navigate('/');
    } catch (error) {
      console.error('Error submitting job:', error);
      setError('Failed to create job. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    handleChange,
    handleSubmit,
  };
}