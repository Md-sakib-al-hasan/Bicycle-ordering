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
exports.productServices = void 0;
const product_model_1 = __importDefault(require("./product.model"));
const mongoose_1 = __importDefault(require("mongoose"));
//store a bicycle  product
const createBicycletoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.create(product);
    return result;
});
//find all bicycle
const getallproducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find();
    return result;
});
//find a product with espesificed type
const getsearchTermbicycledatatoDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.find({ type: { $regex: searchTerm, $options: 'i' } });
    return result !== null && result !== void 0 ? result : [];
});
//find single bicycle
const getSinglebicycledatatoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findById(id);
    return result !== null && result !== void 0 ? result : {};
});
//update single bicycle data
const updateSinglebicycledatatoDB = (id, updata) => __awaiter(void 0, void 0, void 0, function* () {
    const ObjectId = new mongoose_1.default.Types.ObjectId(id);
    yield product_model_1.default.updateOne({ _id: ObjectId }, { $set: Object.assign(Object.assign({}, updata), { updatedAt: new Date() }) });
    const result = yield product_model_1.default.findOne({ _id: ObjectId });
    return result !== null && result !== void 0 ? result : {};
});
//delete single bicycle data
const deleteSinglebicycledatatoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.default.findByIdAndDelete(id);
    return result !== null && result !== void 0 ? result : {};
});
exports.productServices = {
    createBicycletoDB,
    getsearchTermbicycledatatoDB,
    getSinglebicycledatatoDB,
    updateSinglebicycledatatoDB,
    deleteSinglebicycledatatoDB,
    getallproducts,
};
