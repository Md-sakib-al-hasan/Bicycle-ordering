import { model, Schema } from 'mongoose';
import { Tuser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

// this for User

const userSchema = new Schema<Tuser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  },
  { timestamps: true },
);

//conver password to hexadecimal

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, Number(config.bcrypt));
  }
  next();
});

userSchema.post('save', async function (doc) {
  doc.password = '';
});

const User = model<Tuser>('User', userSchema);

export default User;
