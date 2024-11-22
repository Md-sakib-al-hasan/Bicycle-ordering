import { Request, Response } from 'express';
import orderValidationSchema from './order.validatin';
import { OrderServices } from './order.service';
import mongoose from 'mongoose';

// to create a order controller
const createOrder = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const ordervalidation = orderValidationSchema.parse(body);

    // Convert the product string to ObjectId
    const stringconvertObjetid = {
      ...ordervalidation,
      product: new mongoose.Types.ObjectId(ordervalidation.product),
    };
    const result = await OrderServices.createOrdertoDB(stringconvertObjetid);
    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

//handle Revenue
const getRevenuefromorders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getfindRevenuefromeorderstoDB();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: result,
    });
  } catch (error: unknown) {
    res.status(500).json({
      message: 'Calculate Revenue from orders failed',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const OrderController = {
  createOrder,
  getRevenuefromorders,
};
