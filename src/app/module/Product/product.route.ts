import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

//to create a bicycle
router.post('/', productController.createBicycle);
//to find  all bicycle data
router.get('/', productController.getallBiclcyle);
//to find single bicycle data
router.get('/:productId', productController.getSingleBicycle);
//to update single bicycle data
router.put('/:productId', productController.updateSingleBicycleData);
//to delete single bicycle data
router.delete('/:productId', productController.deleteSingBicycleData);

export const Productrouter = router;
