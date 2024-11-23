import { Response } from 'express';

const errorHandeling = (error: Error, res: Response) => {
  res.status(500).json({
    message: error?.message || 'Somethin is wrong',
    succed: false,
    error: error,
    stack: error.stack,
  });
};

export default errorHandeling;
