"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoute = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const token_1 = require("../../shared/middleware/token");
const route = (0, express_1.default)();
//handleRegiser
route.post('/create-user', user_controller_1.UserController.createUser);
//hadlelogin
route.post('/login', token_1.Verifytoken, user_controller_1.UserController.login);
//find all proudct
route.get('/allproudct', token_1.Verifytoken, user_controller_1.UserController.getAllproduct);
//find all order
route.get('/allorder', token_1.Verifytoken, user_controller_1.UserController.getAllorder);
exports.UserRoute = route;
