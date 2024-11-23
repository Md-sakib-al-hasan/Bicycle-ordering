"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const product_model_1 = __importDefault(require("../Product/product.model"));
// Mongoose schema for representing an order placed by a customer.
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, 'Customer email is required'] },
    product: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Product reference is required'],
    },
    quantity: { type: Number, required: [true, 'Quantity is required'] },
    totalPrice: { type: Number, required: [true, 'Total price is required'] },
}, { timestamps: true });
// `pre` hook to update the product's quantity in the Product collection
orderSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield product_model_1.default.findById(this.product); // Directly use `this.product`
            if (!product) {
                throw new Error('Product not found');
            }
            if (product.quantity < this.quantity) {
                throw new Error('Insufficient product quantity');
            }
            product.quantity -= this.quantity;
            if (product.quantity === 0) {
                product.inStock = false;
            }
            yield product.save();
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
//order model export
const Oreders = (0, mongoose_1.model)('Orders', orderSchema);
exports.default = Oreders;
