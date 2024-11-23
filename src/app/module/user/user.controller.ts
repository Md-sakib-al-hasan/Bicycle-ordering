/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import userValidationSchema, { loginValidationSchma } from './user.validation';
import errorHandeling from '../../shared/utils/errorHandler';
import { UserServices } from './user.service';
import resHandeler from '../../shared/utils/responseHandeling';
import bcrypt from 'bcrypt';
import { createtoken } from '../../shared/middleware/token';
//create user
const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    const validationuser = userValidationSchema.parse(user);

    res.cookie('token', createtoken(validationuser), {
      httpOnly: true,
      maxAge: 36000,
    });
    const reuslt = await UserServices.createausertoDB(validationuser);
    resHandeler(res, reuslt, 'Succedfully create user');
  } catch (error: any) {
    errorHandeling(error, res);
  }
};
//user login
const login = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { email, password } = loginValidationSchma.parse(data);
    const result = await UserServices.getSingelUser(email);
    if (
      email === result?.email &&
      (await bcrypt.compare(password, result.password))
    ) {
      resHandeler(res, result, 'Succedfully retrieve user ');
    }
  } catch (error: any) {
    errorHandeling(error, res);
  }
};

//find all proudct
const getAllproduct = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllproductoDB();
    resHandeler(res, result, 'all product retrive');
  } catch (error: any) {
    errorHandeling(error, res);
  }
};
const getAllorder = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllOrderoDB();
    resHandeler(res, result, 'all order retrive');
  } catch (error: any) {
    errorHandeling(error, res);
  }
};

export const UserController = {
  createUser,
  login,
  getAllproduct,
  getAllorder,
};
