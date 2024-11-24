import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Productrouter } from './app/module/Product/product.route';
import { OrderRoute } from './app/module/Order/order.route';
import { UserRoute } from './app/module/user/user.routes';
import cookieParser from 'cookie-parser';
import { PaymentRouter } from './app/module/payment/payment.route';
const app = express();

//middleWare setup
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Handle user routes here
app.use('/api/products', Productrouter);
app.use('/api/orders', OrderRoute);
app.use('/api/user', UserRoute);
app.use('/api/payment',PaymentRouter);

//root route
app.get('/', (req: Request, res: Response) => {
  res.send('this succesfull');
});

//to handle non-existent routes
app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Route not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// to handle global error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    success: false,
    error: err,
    stack: err.stack,
  });
  next();
});

export default app;
