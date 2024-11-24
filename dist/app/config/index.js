"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
    database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
    bcrypt: process.env.BCRYPT_SALT_ROUNDS,
    jwt_key: process.env.JWT_SECRET_KEY,
    stripe_secret_key: process.env.STRIPE_SECRET_KEY || "",
};
