"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/module/Product/product.route");
const order_route_1 = require("./app/module/Order/order.route");
const user_routes_1 = require("./app/module/user/user.routes");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const payment_route_1 = require("./app/module/payment/payment.route");
const app = (0, express_1.default)();
//middleWare setup
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
//Handle user routes here
app.use('/api/products', product_route_1.Productrouter);
app.use('/api/orders', order_route_1.OrderRoute);
app.use('/api/user', user_routes_1.UserRoute);
app.use('/api/payment', payment_route_1.PaymentRouter);
//root route
app.get('/', (req, res) => {
    res.send('this succesfull');
});
//to handle non-existent routes
app.use((req, res, next) => {
    const error = new Error(`Route not found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});
// to handle global error
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err.message,
        success: false,
        error: err,
        stack: err.stack,
    });
    next();
});
exports.default = app;
