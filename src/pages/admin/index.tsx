import React from 'react';
import { AdminLayout } from './components/layout/admin-layout';
import { AdminDashboard } from './components/dashboard/admin-dashboard';
import { useAuth } from '@/lib/contexts/auth-context';
import { Navigate } from 'react-router-dom';

export function AdminPage() {
  const { user } = useAuth();
  const [isAdmin, setIsAdmin] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const checkAdminStatus = async () => {
      if (!user) return;
      // Check admin status from user profile
      const userDoc = await getUserProfile(user.uid);
      setIsAdmin(userDoc?.role === 'admin');
    };

    checkAdminStatus();
  }, [user]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin === false) {
    return <Navigate to="/" replace />;
  }

  if (isAdmin === null) {
    return <div>Loading...</div>;
  }

  return (
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  );
}