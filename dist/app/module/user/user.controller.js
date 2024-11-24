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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_validation_1 = __importStar(require("./user.validation"));
const errorHandler_1 = __importDefault(require("../../shared/utils/errorHandler"));
const user_service_1 = require("./user.service");
const responseHandeling_1 = __importDefault(require("../../shared/utils/responseHandeling"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const token_1 = require("../../shared/middleware/token");
//create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body.user;
        const validationuser = user_validation_1.default.parse(user);
        res.cookie('token', (0, token_1.createtoken)(validationuser), {
            httpOnly: true,
            maxAge: 36000,
        });
        const reuslt = yield user_service_1.UserServices.createausertoDB(validationuser);
        (0, responseHandeling_1.default)(res, reuslt, 'Succedfully create user');
    }
    catch (error) {
        (0, errorHandler_1.default)(error, res);
    }
});
//user login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { email, password } = user_validation_1.loginValidationSchma.parse(data);
        const result = yield user_service_1.UserServices.getSingelUser(email);
        if (email === (result === null || result === void 0 ? void 0 : result.email) &&
            (yield bcrypt_1.default.compare(password, result.password))) {
            (0, responseHandeling_1.default)(res, result, 'Succedfully retrieve user ');
        }
    }
    catch (error) {
        (0, errorHandler_1.default)(error, res);
    }
});
//find all proudct
const getAllproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserServices.getAllproductoDB();
        (0, responseHandeling_1.default)(res, result, 'all product retrive');
    }
    catch (error) {
        (0, errorHandler_1.default)(error, res);
    }
});
const getAllorder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_service_1.UserServices.getAllOrderoDB();
        (0, responseHandeling_1.default)(res, result, 'all order retrive');
    }
    catch (error) {
        (0, errorHandler_1.default)(error, res);
    }
});
exports.UserController = {
    createUser,
    login,
    getAllproduct,
    getAllorder,
};
