"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// Zod schema for validating an order
const orderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email("Invalid email format")
        .nonempty("Customer email is required"),
    product: zod_1.z
        .string()
        .regex(/^[a-f\d]{24}$/i, "Invalid product ID format (must be a MongoDB ObjectId)"),
    quantity: zod_1.z
        .number()
        .min(1, "Quantity must be at least 1")
        .int("Quantity must be an integer"),
    totalPrice: zod_1.z
        .number()
        .min(0, "Total price must be a non-negative number"),
});
