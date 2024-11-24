/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from "stripe";
import config from "../../config";

const stripe = new Stripe(config.stripe_secret_key,{ apiVersion: "2024-11-20.acacia" })

 const  createPaymentIntent = async (amount:number,currency:string) => {
    try{
             return await stripe.paymentIntents.create({amount,currency});
    }catch(error:any){
         throw new Error(`stripe Error:${error.message}`)
    }
}

const  verifyPayment  = async (paymentIntentId:string) =>{
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)
    if(paymentIntent.status === 'succeeded'){
         return {payment:"payment succedfull"}
    }else{
        
        throw new Error("payment is not completed ")
        
    }
   
}
export const PaymentServices = {
    createPaymentIntent,
    verifyPayment,
}