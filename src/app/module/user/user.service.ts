import Oreders from '../Order/order.model';
import Products from '../Product/product.model';
import { Tuser } from './user.interface';
import User from './user.model';
//create a user
const createausertoDB = async (user: Tuser) => {
  const result = await User.create(user);
  return result;
};

//find a user
const getSingelUser = async (email: string) => {
  const result = await User.findOne({ email });
  return result;
};

//find all product
const getAllproductoDB = async () => {
  const result = await Products.aggregate([
    { $project: { name: 1, brand: 1 } },
  ]);
  return result;
};
const getAllOrderoDB = async () => {
  const result = await Oreders.aggregate([
    { $project: { email: 1, product: 1, quantity: 1, updatedAt: 1 } },
  ]);
  return result;
};

export const UserServices = {
  createausertoDB,
  getSingelUser,
  getAllproductoDB,
  getAllOrderoDB,
};
