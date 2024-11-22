import { z } from 'zod';

// Zod schema for validating an order
const orderValidationSchema = z.object({
  email: z
    .string()
    .email('Invalid email format')
    .nonempty('Customer email is required'),

  product: z
    .string()
    .regex(
      /^[a-f\d]{24}$/i,
      'Invalid product ID format (must be a MongoDB ObjectId)',
    ),

  quantity: z
    .number()
    .min(1, 'Quantity must be at least 1')
    .int('Quantity must be an integer'),

  totalPrice: z.number().min(0, 'Total price must be a non-negative number'),
});

export default orderValidationSchema;
