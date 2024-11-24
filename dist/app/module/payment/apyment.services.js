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
exports.PaymentServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const stripe_1 = __importDefault(require("stripe"));
const config_1 = __importDefault(require("../../config"));
const stripe = new stripe_1.default(config_1.default.stripe_secret_key, { apiVersion: "2024-11-20.acacia" });
const createPaymentIntent = (amount, currency) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield stripe.paymentIntents.create({ amount, currency });
    }
    catch (error) {
        throw new Error(`stripe Error:${error.message}`);
    }
});
const verifyPayment = (paymentIntentId) => __awaiter(void 0, void 0, void 0, function* () {
    const paymentIntent = yield stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status === 'succeeded') {
        return { payment: "payment succedfull" };
    }
    else {
        throw new Error("payment is not completed ");
    }
});
exports.PaymentServices = {
    createPaymentIntent,
    verifyPayment,
};
