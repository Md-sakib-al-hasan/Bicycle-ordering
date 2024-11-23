"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoute = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const route = (0, express_1.default)();
//create a order
route.post('/', order_controller_1.OrderController.createOrder);
//calculate Revenue
route.get('/revenue', order_controller_1.OrderController.getRevenuefromorders);
exports.OrderRoute = route;
