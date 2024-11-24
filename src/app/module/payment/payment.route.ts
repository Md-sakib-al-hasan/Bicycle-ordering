import express from 'express'
import { PaymentController } from './payment.controller';

const router = express.Router();

router.post('/',PaymentController.createpayment)
router.post('/:paymentId',PaymentController.verifyPayment)

export const PaymentRouter = router;