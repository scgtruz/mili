import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/contexts/auth-context';

export function useAuthGuard(requireAuth: boolean = true) {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && requireAuth && !user) {
      navigate('/login', { replace: true });
    }
  }, [user, isLoading, navigate, requireAuth]);

  return { user, isLoading };
}