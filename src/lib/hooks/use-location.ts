import { useState, useEffect } from 'react';
import { County, getCountiesByState } from '@/lib/services/location.service';

interface UseLocationResult {
  counties: County[];
  isLoading: boolean;
  error: string | null;
}

export function useLocation(stateCode: string): UseLocationResult {
  const [counties, setCounties] = useState<County[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadCounties() {
      if (!stateCode) {
        setCounties([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const countyList = await getCountiesByState(stateCode);
        setCounties(countyList);
      } catch (err) {
        setError('Failed to load counties. Please try again.');
        setCounties([]);
      } finally {
        setIsLoading(false);
      }
    }

    loadCounties();
  }, [stateCode]);

  return { counties, isLoading, error };
}