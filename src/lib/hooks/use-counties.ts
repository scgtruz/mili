import { useState, useEffect } from 'react';
import { getCountiesByState } from '@/lib/services/location.service';
import { County } from '@/lib/types/location';

export function useCounties(state: string) {
  const [counties, setCounties] = useState<County[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCounties() {
      if (!state) {
        setCounties([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const countyList = await getCountiesByState(state);
        setCounties(countyList);
      } catch (err) {
        setError('Failed to load counties. Please try again.');
        setCounties([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCounties();
  }, [state]);

  return { counties, isLoading, error };
}