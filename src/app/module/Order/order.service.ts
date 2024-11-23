import { Torders } from './order.interface';
import Oreders from './order.model';

//create a order and store data in database
const createOrdertoDB = async (order: Torders) => {
  const result = await Oreders.create(order);
  return result;
};

//get data revenue from orders
const getfindRevenuefromeorderstoDB = async () => {
  const result = await Oreders.aggregate([

    {
      $group: { _id: null, totalRevenue: { $sum: '$totalPrice' } },
    },
    { $project: { _id: 0 } },
  ]);
  return result;
};

export const OrderServices = {
  createOrdertoDB,
  getfindRevenuefromeorderstoDB,
};
