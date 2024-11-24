/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';

const resHandeler = async (res: Response, result: any, message: string) => {
  res.status(200).json({
    messge: message,
    succed: true,
    data: result,
  });
};

export default resHandeler;
