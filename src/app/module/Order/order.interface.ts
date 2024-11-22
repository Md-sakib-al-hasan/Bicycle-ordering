import mongoose from 'mongoose';

export type Torders = {
  email: string;
  product: mongoose.Types.ObjectId; // Ensure this is of type `ObjectId`
  quantity: number;
  totalPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
};
