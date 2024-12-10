import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { debounce } from './debounce';
import { normalizeSearchText, searchInText } from './search';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export {
  debounce,
  normalizeSearchText,
  searchInText
};