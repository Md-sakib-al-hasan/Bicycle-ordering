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
exports.UserServices = void 0;
const order_model_1 = __importDefault(require("../Order/order.model"));
const product_model_1 = __importDefault(require("../Product/product.model"));
const user_model_1 = __importDefault(require("./user.model"));
//create a user
const createausertoDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.create(user);
    return result;
});
//find a user
const getSingelUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.findOne({ email });
    return result;
});
//find all product
const getAllproductoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.aggregate([
        { $project: { name: 1 } },
    ]);
    return result;
});
const getAllOrderoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.default.aggregate([
        { $project: { email: 1, product: 1, quantity: 1, updatedAt: 1 } },
    ]);
    return result;
});
exports.UserServices = {
    createausertoDB,
    getSingelUser,
    getAllproductoDB,
    getAllOrderoDB,
};
