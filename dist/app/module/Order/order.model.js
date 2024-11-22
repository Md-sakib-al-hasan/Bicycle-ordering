"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Mongoose schema for representing an order placed by a customer.
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, "Customer email is required"],
    },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product reference is required"]
    },
    quantity: { type: Number, required: [true, "Quantity is required"] },
    totalPrice: { type: Number, required: [true, "Total price is required"] }
});
const Oreder = (0, mongoose_1.model)('Order', orderSchema);
exports.default = Oreder;
