"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectIdValidationSchema = exports.optionalProductSchema = exports.Searchtemschemavalidation = void 0;
const zod_1 = require("zod");
// Define the Zod schema for product validation
const productValidationSchema = zod_1.z.object({
    name: zod_1.z
        .string()
        .trim()
        .min(1, { message: 'Product name is required' })
        .max(255, { message: 'Product name cannot be longer than 255 characters' }),
    brand: zod_1.z
        .string()
        .trim()
        .min(1, { message: 'Brand name is required' })
        .max(100, { message: 'Brand name cannot be longer than 100 characters' }),
    price: zod_1.z.number().positive({ message: 'Price must be a positive number' }),
    type: zod_1.z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
        message: 'Type must be one of Mountain, Road, Hybrid, BMX, or Electric',
    }),
    description: zod_1.z
        .string()
        .trim()
        .min(1, { message: 'Description is required' })
        .max(1000, {
        message: 'Description cannot be longer than 1000 characters',
    }),
    quantity: zod_1.z
        .number()
        .int()
        .min(0, { message: 'Quantity must be a non-negative integer' }),
    inStock: zod_1.z.boolean().refine((val) => typeof val === 'boolean', {
        message: 'Stock status must be a boolean',
    }),
});
//query type filttering
exports.Searchtemschemavalidation = zod_1.z.string().trim();
//productvalidtinSchema convert to optinal file schema
exports.optionalProductSchema = productValidationSchema.partial().strict();
// Define the zod schema for productId validation and export
exports.ObjectIdValidationSchema = zod_1.z
    .string()
    .regex(/^[a-f\d]{24}$/i, 'Invalid product ID format (must be a MongoDB ObjectId)');
//export productvalidtinSchema
exports.default = productValidationSchema;
