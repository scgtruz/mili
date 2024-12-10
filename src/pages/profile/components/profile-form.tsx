import React from 'react';
import { Button } from '@/components/ui/button';
import { ProfileFormData } from '@/lib/types/user';
import { AlertCircle } from 'lucide-react';

interface ProfileFormProps {
  initialData: {
    displayName: string;
  };
  onSubmit: (data: ProfileFormData) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

export function ProfileForm({ initialData, onSubmit, isLoading, error }: ProfileFormProps) {
  const [formData, setFormData] = React.useState<ProfileFormData>({
    displayName: initialData.displayName,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      return; // Handle password mismatch error
    }
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-center text-red-800">
          <AlertCircle className="h-5 w-5 mr-2" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      <div>
        <label htmlFor="displayName" className="block text-sm font-medium text-mint-700">
          Display Name
        </label>
        <input
          type="text"
          id="displayName"
          value={formData.displayName}
          onChange={(e) => setFormData({ ...formData, displayName: e.target.value })}
          className="mt-1 block w-full rounded-lg border-mint-200 shadow-sm focus:border-mint-500 focus:ring-mint-500 bg-white/80"
          required
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-mint-900">Change Password</h3>
        
        <div>
          <label htmlFor="currentPassword" className="block text-sm font-medium text-mint-700">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            value={formData.currentPassword}
            onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
            className="mt-1 block w-full rounded-lg border-mint-200 shadow-sm focus:border-mint-500 focus:ring-mint-500 bg-white/80"
          />
        </div>

        <div>
          <label htmlFor="newPassword" className="block text-sm font-medium text-mint-700">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            value={formData.newPassword}
            onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
            className="mt-1 block w-full rounded-lg border-mint-200 shadow-sm focus:border-mint-500 focus:ring-mint-500 bg-white/80"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-mint-700">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            className="mt-1 block w-full rounded-lg border-mint-200 shadow-sm focus:border-mint-500 focus:ring-mint-500 bg-white/80"
          />
        </div>
      </div>

      <Button 
        type="submit" 
        disabled={isLoading}
        className="w-full bg-mint-600 hover:bg-mint-700 text-white"
      >
        {isLoading ? 'Saving...' : 'Save Changes'}
      </Button>
    </form>
  );
}