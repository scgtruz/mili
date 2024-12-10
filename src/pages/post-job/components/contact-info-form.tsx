import React from 'react';

interface ContactInfoFormProps {
  formData: {
    clientName: string;
    clientEmail: string;
    clientPhone: string;
  };
  onChange: (field: string, value: string) => void;
}

export function ContactInfoForm({ formData, onChange }: ContactInfoFormProps) {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="clientName" className="block text-sm font-bold text-gray-900">
          Full Name
        </label>
        <input
          type="text"
          id="clientName"
          value={formData.clientName}
          onChange={(e) => onChange('clientName', e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>

      <div>
        <label htmlFor="clientEmail" className="block text-sm font-bold text-gray-900">
          Email Address
        </label>
        <input
          type="email"
          id="clientEmail"
          value={formData.clientEmail}
          onChange={(e) => onChange('clientEmail', e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
        />
      </div>

      <div>
        <label htmlFor="clientPhone" className="block text-sm font-bold text-gray-900">
          Phone Number
        </label>
        <input
          type="tel"
          id="clientPhone"
          value={formData.clientPhone}
          onChange={(e) => onChange('clientPhone', e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          required
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit phone number"
          placeholder="1234567890"
        />
      </div>
    </div>
  );
}