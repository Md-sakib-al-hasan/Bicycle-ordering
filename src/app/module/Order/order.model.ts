import { Schema, model } from 'mongoose';
import { Torders } from './order.interface';
import Products from '../Product/product.model';

// Mongoose schema for representing an order placed by a customer.
const orderSchema = new Schema<Torders>(
  {
    email: { type: String, required: [true, 'Customer email is required'] },

    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: [true, 'Product reference is required'],
    },
    quantity: { type: Number, required: [true, 'Quantity is required'] },
    totalPrice: { type: Number, required: [true, 'Total price is required'] },
  },
  { timestamps: true },
);

// `pre` hook to update the product's quantity in the Product collection
orderSchema.pre('save', async function (next) {
  try {
    const product = await Products.findById(this.product); // Directly use `this.product`

    if (!product) {
      throw new Error('Product not found');
    }

    if (product.quantity < this.quantity) {
      throw new Error('Insufficient product quantity');
    }

    product.quantity -= this.quantity;

    if (product.quantity === 0) {
      product.inStock = false;
    }

    await product.save();
    next();
  } catch (error:any) {
    next(error);
  }
});

//order model export
const Oreders = model<Torders>('Orders', orderSchema);

export default Oreders;
