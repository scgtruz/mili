import React from 'react';
import { Link } from 'react-router-dom';
import { Job } from '@/lib/types/job';
import { serviceCategories } from '@/data/service-categories';
import { SecureContactDetails } from '@/components/contact/secure-contact-details';
import { useAuth } from '@/lib/contexts/auth-context';
import { Button } from '@/components/ui/button';
import { Edit } from 'lucide-react';
import { LocationDisplay } from '@/components/location/location-display';

interface JobCardProps {
  job: Job & { distance?: number };
}

export function JobCard({ job }: JobCardProps) {
  const category = serviceCategories.find(cat => cat.id === job.category);
  const formattedDate = new Date(job.createdAt.seconds * 1000).toLocaleDateString();
  const { user } = useAuth();

  const contactInfo = {
    fullName: job.clientName,
    phone: job.clientPhone,
    email: job.clientEmail,
    address: job.address,
  };

  const canEdit = user?.uid === job.clientId;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{job.title}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {category?.name}
              {job.distance !== undefined && (
                <span className="ml-2 text-gray-400">
                  • {job.distance.toFixed(1)} miles away
                </span>
              )}
            </p>
          </div>
          {canEdit && (
            <Link to={`/edit-job/${job.id}`}>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Edit
              </Button>
            </Link>
          )}
        </div>
      </div>

      <SecureContactDetails 
        contactInfo={contactInfo}
        jobId={job.id!}
        clientId={job.clientId}
        className="mb-6"
      />

      <p className="text-gray-700 mb-4">{job.description}</p>
      
      <div className="flex items-center justify-between text-sm">
        <LocationDisplay state={job.state} county={job.county} />
        <span className="text-gray-500">Posted {formattedDate}</span>
      </div>
    </div>
  );
}