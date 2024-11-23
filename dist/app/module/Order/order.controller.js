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
exports.OrderController = void 0;
const order_validatin_1 = __importDefault(require("./order.validatin"));
const order_service_1 = require("./order.service");
const mongoose_1 = __importDefault(require("mongoose"));
// to create a order controller
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const ordervalidation = order_validatin_1.default.parse(body);
        // Convert the product string to ObjectId
        const stringconvertObjetid = Object.assign(Object.assign({}, ordervalidation), { product: new mongoose_1.default.Types.ObjectId(ordervalidation.product) });
        const result = yield order_service_1.OrderServices.createOrdertoDB(stringconvertObjetid);
        res.status(200).json({
            message: 'Order created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Validation failed',
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
//handle Revenue
const getRevenuefromorders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_service_1.OrderServices.getfindRevenuefromeorderstoDB();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            message: 'Calculate Revenue from orders failed',
            success: false,
            error: error,
            stack: error.stack,
        });
    }
});
exports.OrderController = {
    createOrder,
    getRevenuefromorders,
};
