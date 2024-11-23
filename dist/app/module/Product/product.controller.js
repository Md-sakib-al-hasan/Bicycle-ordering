"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_validation_1 = __importStar(require("./product.validation"));
const product_service_1 = require("./product.service");
//create a Biclycle
const createBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const zodvalidedata = product_validation_1.default.parse(body);
        const result = yield product_service_1.productServices.createBicycletoDB(zodvalidedata);
        res.status(200).json({
            message: 'Bicycle created successfully',
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
//find all Biclcyle
const getallBiclcyle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        if (searchTerm) {
            const validateSearchtrm = product_validation_1.Searchtemschemavalidation.parse(searchTerm);
            const result = yield product_service_1.productServices.getsearchTermbicycledatatoDB(validateSearchtrm);
            res.status(200).json({
                message: 'Bicycles retrieved successfully',
                success: true,
                data: result,
            });
        }
        else {
            const result = yield product_service_1.productServices.getallproducts();
            res.status(200).json({
                message: 'Bicycles retrieved successfully',
                success: true,
                data: result,
            });
        }
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
//find single Biclcyle with id
const getSingleBicycle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productIdValidation = product_validation_1.ObjectIdValidationSchema.parse(productId);
        const result = yield product_service_1.productServices.getSinglebicycledatatoDB(productIdValidation);
        res.status(200).json({
            message: 'Bicycle retrieved successfully',
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
//update single bicleyle with id
const updateSingleBicycleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productIdValidation = product_validation_1.ObjectIdValidationSchema.parse(productId);
        const updatedata = req.body;
        const updatedatawithValidation = product_validation_1.optionalProductSchema.parse(updatedata);
        const result = yield product_service_1.productServices.updateSinglebicycledatatoDB(productIdValidation, updatedatawithValidation);
        res.status(200).json({
            message: 'Bicycle updated successfully',
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
//delete single data with id
const deleteSingBicycleData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const productIdValidation = product_validation_1.ObjectIdValidationSchema.parse(productId);
        const result = yield product_service_1.productServices.deleteSinglebicycledatatoDB(productIdValidation);
        res.status(200).json({
            message: 'Bicycle deleted successfully',
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
exports.productController = {
    createBicycle,
    getallBiclcyle,
    getSingleBicycle,
    updateSingleBicycleData,
    deleteSingBicycleData,
};
