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
exports.PaymentController = void 0;
const errorHandler_1 = __importDefault(require("../../shared/utils/errorHandler"));
const apyment_services_1 = require("./apyment.services");
const responseHandeling_1 = __importDefault(require("../../shared/utils/responseHandeling"));
const createpayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, currency } = req.body;
        if (!amount || !currency) {
            throw new Error('mount and currency are required.');
        }
        const paymentIntent = yield apyment_services_1.PaymentServices.createPaymentIntent(amount, currency);
        (0, responseHandeling_1.default)(res, paymentIntent, "Payment intent created successfully");
    }
    catch (error) {
        (0, errorHandler_1.default)(error, res);
    }
});
const verifyPayment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { paymentId } = req.params;
        const result = yield apyment_services_1.PaymentServices.verifyPayment(paymentId);
        (0, responseHandeling_1.default)(res, result, "succefull payment");
    }
    catch (error) {
        (0, errorHandler_1.default)(error, res);
    }
});
exports.PaymentController = {
    createpayment,
    verifyPayment,
};
