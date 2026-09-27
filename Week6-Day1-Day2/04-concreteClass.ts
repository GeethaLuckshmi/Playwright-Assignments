import { CanaraBank } from "./04-abstractionPayments";

class Amazon extends CanaraBank{
    recordPaymentDetails(): void {
        console.log(`Payment successful`)
    }
    
}

const objPayment = new Amazon();
objPayment.cardPayments()
objPayment.cashOnDelivery()
objPayment.internetBanking()
objPayment.recordPaymentDetails()
objPayment.upiPayments()