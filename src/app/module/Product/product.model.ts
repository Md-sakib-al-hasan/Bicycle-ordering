import { model, Schema } from 'mongoose';
import { Tproducts } from './product.interface';

// Define the  schema for product validation
const productSchema = new Schema<Tproducts>(
  {
    name: { type: String, required: [true, 'Product name is required'] },
    brand: { type: String, required: [true, 'Brand name is required'] },
    price: { type: Number, required: [true, 'Price is required'] },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message: 'Type must be one of Mountain, Road, Hybrid, BMX, or Electric',
      },
      required: [true, 'Type is required'],
    },
    description: { type: String, required: [true, 'Description is required'] },
    quantity: { type: Number, required: [true, 'Quantity is required'] },
    inStock: { type: Boolean, required: [true, 'Stock status is required'] },
  },
  { timestamps: true },
);

// create product model
const Products = model<Tproducts>('Products', productSchema);
export default Products;
