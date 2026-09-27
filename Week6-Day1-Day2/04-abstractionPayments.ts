import { Payments } from "./04-interfacePayment";

export abstract class CanaraBank implements Payments{
    cashOnDelivery(): void {
        console.log("Payment type selected as Cash on delivery");
    }
    upiPayments(): void {
        console.log("Payment type selected as UPIPayments");
    }
    cardPayments(): void {
        console.log("Payment type selected as CardPayments");
    }
    internetBanking(): void {
        console.log("Payment type selected as internet Banking");
    }

    abstract recordPaymentDetails():void
    
}