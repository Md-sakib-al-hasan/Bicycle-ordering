/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import errorHandeling from "../../shared/utils/errorHandler";
import { PaymentServices } from "./apyment.services";
import resHandeler from "../../shared/utils/responseHandeling";


const createpayment = async (req:Request,res:Response) => {
    try{
            const {amount,currency} = req.body;
            if(!amount || !currency){
                throw  new Error('mount and currency are required.')
            }

            const paymentIntent = await PaymentServices.createPaymentIntent(amount,currency)
            resHandeler(res,paymentIntent,"Payment intent created successfully")

    }catch(error:any){
        errorHandeling(error,res)
    }
}

const verifyPayment = async (req:Request,res:Response)=>{
    try{
        const {paymentId} = req.params;
        const result = await PaymentServices.verifyPayment(paymentId)
        resHandeler(res,result,"succefull payment")
    }catch(error:any){
        errorHandeling(error,res)
    }
}

export const PaymentController = {
    createpayment,
    verifyPayment,
}