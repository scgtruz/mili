import { z } from 'zod';

export const jobSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  category: z.string().min(1, 'Category is required'),
  zipCode: z.string().regex(/^\d{5}$/, 'Must be a valid 5-digit ZIP code'),
  clientName: z.string().min(1, 'Name is required'),
  clientEmail: z.string().email('Must be a valid email address'),
  clientPhone: z.string().regex(/^\d{10}$/, 'Must be a valid 10-digit phone number'),
});

export const filterSchema = z.object({
  category: z.string().optional(),
  zipCode: z.string().regex(/^\d{5}$/, 'Must be a valid 5-digit ZIP code').optional(),
  radius: z.number().min(5).max(200).default(25),
});

export type JobFormData = z.infer<typeof jobSchema>;
export type FilterData = z.infer<typeof filterSchema>;