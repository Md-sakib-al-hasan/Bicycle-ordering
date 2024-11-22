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
      $lookup: {
        from: 'products',
        localField: 'product',
        foreignField: '_id',
        as: 'productDetails',
      },
    },
    {
      $unwind: '$productDetails',
    },
    {
      $project: {
        revenue: { $multiply: ['$productDetails.price', '$quantity'] },
      },
    },
    {
      $group: { _id: null, totalRevenue: { $sum: '$revenue' } },
    },
    { $project: { _id: 0 } },
  ]);
  return result;
};

export const OrderServices = {
  createOrdertoDB,
  getfindRevenuefromeorderstoDB,
};
