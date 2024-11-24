import { Tproducts } from './product.interface';
import Products from './product.model';
import mongoose from 'mongoose';

//store a bicycle  product
const createBicycletoDB = async (product: Tproducts) => {
  const result = await Products.create(product);
  return result;
};

//find all bicycle
const getallproducts = async () => {
  const result = await Products.find();
  return result;
};

//find a product with espesificed type
const getsearchTermbicycledatatoDB = async (searchTerm: string) => {
  const result = await Products.find({
    $or: [
      { name: { $regex: searchTerm, $options: 'i' } },
      { brand: { $regex: searchTerm, $options: 'i' } },
      { type: { $regex: searchTerm, $options: 'i' } },
    ],
  });
  return result ?? [];
};
//find single bicycle
const getSinglebicycledatatoDB = async (id: string) => {
  const result = await Products.findById(id);
  return result ?? {};
};
//update single bicycle data
const updateSinglebicycledatatoDB = async (
  id: string,
  updata: Partial<Tproducts>,
) => {
  const ObjectId = new mongoose.Types.ObjectId(id);
  await Products.updateOne(
    { _id: ObjectId },
    { $set: { ...updata, updatedAt: new Date() } },
  );
  const result = await Products.findOne({ _id: ObjectId });
  return result ?? {};
};

//delete single bicycle data
const deleteSinglebicycledatatoDB = async (id: string) => {
  const result = await Products.findByIdAndDelete(id);
  return result ?? {};
};

export const productServices = {
  createBicycletoDB,
  getsearchTermbicycledatatoDB,
  getSinglebicycledatatoDB,
  updateSinglebicycledatatoDB,
  deleteSinglebicycledatatoDB,
  getallproducts,
};
