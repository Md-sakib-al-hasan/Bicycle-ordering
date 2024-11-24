"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidationSchma = void 0;
const zod_1 = require("zod");
// Define the Zod schema
const userValidationSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Name is required'),
    email: zod_1.z.string().min(1, 'Email is required').email('Invalid email address'),
    password: zod_1.z
        .string()
        .min(6, 'Password must be at least 6 characters long')
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/, 'Password must include at least one letter, one number, and one special character'),
    role: zod_1.z.enum(['user', 'admin']).default('user'),
});
exports.default = userValidationSchema;
//Difne the zod schema for login
exports.loginValidationSchma = zod_1.z.object({
    email: zod_1.z.string().email().min(1, { message: 'Email is required' }),
    password: zod_1.z
        .string()
        .min(6, 'Password must be at least 6 characters long')
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/, 'Password must include at least one letter, one number, and one special character'),
});
