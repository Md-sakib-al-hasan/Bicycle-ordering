import config from '../../config';
import jwt from 'jsonwebtoken';

import { NextFunction, Request, Response } from 'express';

const secretKey = config.jwt_key || 'afalkfjlkajfijhaoifjaksdk';

//create a token
export const createtoken = async (payload: any) => {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
  return token;
};

//verify token middlware

export const Verifytoken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.token;
  jwt.verify(token, secretKey, (err: any, decoded: any) => {
    if (err) {
      return res.status(403).send({ message: 'Invalid or expired token' });
    }

    // Attach decoded data to request
    req.body = decoded;
    next();
  });
};
