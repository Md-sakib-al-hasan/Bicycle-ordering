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
exports.Verifytoken = exports.createtoken = void 0;
const config_1 = __importDefault(require("../../config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = config_1.default.jwt_key || "afalkfjlkajfijhaoifjaksdk";
//create a token
const createtoken = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const token = jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: "1h", });
    return token;
});
exports.createtoken = createtoken;
//verify token middlware
const Verifytoken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.token;
    jsonwebtoken_1.default.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: "Invalid or expired token" });
        }
        // Attach decoded data to request
        req.body = decoded;
        next();
    });
});
exports.Verifytoken = Verifytoken;
