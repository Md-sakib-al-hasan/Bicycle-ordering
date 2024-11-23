import { z } from 'zod';

// Define the Zod schema for product validation
const productValidationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: 'Product name is required' })
    .max(255, { message: 'Product name cannot be longer than 255 characters' }),
  brand: z
    .string()
    .trim()
    .min(1, { message: 'Brand name is required' })
    .max(100, { message: 'Brand name cannot be longer than 100 characters' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
    message: 'Type must be one of Mountain, Road, Hybrid, BMX, or Electric',
  }),
  description: z
    .string()
    .trim()
    .min(1, { message: 'Description is required' })
    .max(1000, {
      message: 'Description cannot be longer than 1000 characters',
    }),
  quantity: z
    .number()
    .int()
    .min(0, { message: 'Quantity must be a non-negative integer' }),
  inStock: z.boolean().refine((val) => typeof val === 'boolean', {
    message: 'Stock status must be a boolean',
  }),
});

//query type filttering
export const Searchtemschemavalidation = z.string().trim();

//productvalidtinSchema convert to optinal file schema

export const optionalProductSchema = productValidationSchema.partial().strict();

// Define the zod schema for productId validation and export
export const ObjectIdValidationSchema = z
  .string()
  .regex(
    /^[a-f\d]{24}$/i,
    'Invalid product ID format (must be a MongoDB ObjectId)',
  );

//export productvalidtinSchema
export default productValidationSchema;
