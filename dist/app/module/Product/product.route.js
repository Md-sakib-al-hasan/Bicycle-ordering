"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productrouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
//to create a bicycle
router.post('/', product_controller_1.productController.createBicycle);
//to find  all bicycle data
router.get('/', product_controller_1.productController.getallBiclcyle);
//to find single bicycle data
router.get('/:productId', product_controller_1.productController.getSingleBicycle);
//to update single bicycle data
router.put('/:productId', product_controller_1.productController.updateSingleBicycleData);
//to delete single bicycle data
router.delete('/:productId', product_controller_1.productController.deleteSingBicycleData);
exports.Productrouter = router;
