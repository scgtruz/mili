import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '@/config/firebase';
import { US_STATES } from '@/lib/data/us-states';
import { State } from '@/lib/types/location';
import { Job } from '@/lib/types/job';

export function useActiveStates() {
  const [activeStates, setActiveStates] = useState<State[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      setIsLoading(true);
      try {
        // Create a query to get all jobs ordered by creation date
        const jobsRef = collection(db, 'jobs');
        const jobsQuery = query(jobsRef, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(jobsQuery);
        
        // Transform the snapshot into Job objects
        const jobData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Job[];
        
        setJobs(jobData);

        // Get unique states and their job counts
        const stateJobCounts = new Map<string, number>();
        jobData.forEach(job => {
          const count = stateJobCounts.get(job.state) || 0;
          stateJobCounts.set(job.state, count + 1);
        });

        // Filter and sort states that have jobs
        const filteredStates = US_STATES
          .filter(state => stateJobCounts.has(state.abbreviation))
          .sort((a, b) => {
            const countA = stateJobCounts.get(a.abbreviation) || 0;
            const countB = stateJobCounts.get(b.abbreviation) || 0;
            return countB - countA; // Sort by job count descending
          });

        setActiveStates(filteredStates);
        setError(null);
      } catch (err) {
        console.error('Error fetching jobs:', err);
        setError('Failed to load states');
        setJobs([]);
        setActiveStates([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return { activeStates, jobs, isLoading, error };
}