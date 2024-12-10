import React from 'react';
import { formatDate, formatPhone } from '@/lib/utils/format';
import { Purchase } from '@/lib/types/purchase';
import { LocationDisplay } from '@/components/location/location-display';
import { Phone, Mail, MapPin, Calendar, Tag, FileText, DollarSign } from 'lucide-react';
import { LEAD_PRICE } from '@/lib/utils/constants';

interface PurchasedJobsHistoryProps {
  purchases: Purchase[];
}

export function PurchasedJobsHistory({ purchases }: PurchasedJobsHistoryProps) {
  if (purchases.length === 0) {
    return (
      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 text-center border border-mint-200/50">
        <p className="text-mint-700">No purchased leads yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {purchases.map((purchase) => (
        <div key={purchase.id} className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-mint-200/50">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-semibold text-mint-900">{purchase.jobTitle}</h3>
              <div className="flex items-center gap-2 mt-1 text-sm text-mint-600">
                <Calendar className="h-4 w-4" />
                <span>Purchased on {formatDate(purchase.purchaseDate.toDate())}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-mint-100/50 text-mint-700 rounded-full">
              <DollarSign className="h-4 w-4" />
              <span className="text-sm font-medium">${LEAD_PRICE.toFixed(2)}</span>
            </div>
          </div>

          {/* Job Details Section */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="h-5 w-5 text-mint-600" />
              <h4 className="font-semibold text-mint-800">Job Details</h4>
            </div>
            <div className="bg-mint-50/50 rounded-lg p-4 space-y-3">
              <p className="text-mint-700">{purchase.jobDescription}</p>
              {purchase.location && (
                <div className="flex items-center text-mint-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <LocationDisplay 
                    state={purchase.location.state} 
                    county={purchase.location.county}
                    showIcon={false}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Client Contact Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Tag className="h-5 w-5 text-mint-600" />
              <h4 className="font-semibold text-mint-800">Client Contact Information</h4>
            </div>
            <div className="bg-mint-50/50 rounded-lg p-4 space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <p className="text-mint-700 font-medium">
                    {purchase.clientContact.name}
                  </p>
                  <a 
                    href={`tel:${purchase.clientContact.phone}`}
                    className="flex items-center text-mint-600 hover:text-mint-700 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {formatPhone(purchase.clientContact.phone)}
                  </a>
                  <a 
                    href={`mailto:${purchase.clientContact.email}`}
                    className="flex items-center text-mint-600 hover:text-mint-700 transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {purchase.clientContact.email}
                  </a>
                </div>
                {purchase.clientContact.address && (
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-1 text-mint-600" />
                    <span className="text-mint-700">
                      {purchase.clientContact.address}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}