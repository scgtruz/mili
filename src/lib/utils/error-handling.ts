import { FirebaseError } from 'firebase/app';

export function handleFirestoreError(error: unknown): Error {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'failed-precondition':
        return new Error('Please try a simpler search first, then add more filters');
      case 'permission-denied':
        return new Error('You do not have permission to perform this action');
      case 'not-found':
        return new Error('The requested resource was not found');
      case 'resource-exhausted':
        return new Error('Too many requests. Please try again later');
      case 'cancelled':
        return new Error('The operation was cancelled');
      case 'invalid-argument':
        return new Error('Invalid search criteria. Please check your filters');
      case 'deadline-exceeded':
        return new Error('The operation timed out. Please try again');
      case 'unavailable':
        return new Error('Service temporarily unavailable. Please try again later');
      case 'internal':
        return new Error('An internal error occurred. Please try again');
      default:
        console.error('Unhandled Firebase error:', error);
        return new Error('An unexpected error occurred. Please try again');
    }
  }
  
  if (error instanceof Error) {
    return error;
  }
  
  console.error('Unknown error:', error);
  return new Error('An unexpected error occurred. Please try again');
}

export function isFirebaseError(error: unknown): error is FirebaseError {
  return error instanceof FirebaseError;
}