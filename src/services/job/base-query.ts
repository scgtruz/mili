import { Query, collection, query, orderBy } from 'firebase/firestore';
import { db } from '@/config/firebase';

export function getBaseJobQuery(): Query {
  return query(
    collection(db, 'jobs'),
    orderBy('createdAt', 'desc')
  );
}