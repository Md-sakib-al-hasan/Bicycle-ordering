import express from 'express';
import { OrderController } from './order.controller';

const route = express();
//create a order
route.post('/', OrderController.createOrder);
//calculate Revenue
route.get('/revenue', OrderController.getRevenuefromorders);

export const OrderRoute = route;
