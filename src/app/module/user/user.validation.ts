import { z } from 'zod';

// Define the Zod schema
const userValidationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/,
      'Password must include at least one letter, one number, and one special character',
    ),
  role: z.enum(['user', 'admin']).default('user'),
});

export default userValidationSchema;

//Difne the zod schema for login

export const loginValidationSchma = z.object({
  email: z.string().email().min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/,
      'Password must include at least one letter, one number, and one special character',
    ),
});
