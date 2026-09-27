
class Order{
    productName:string;
    orderId:string;
    price:number;

    constructor(name:string,id:string,rate:number){
        this.productName=name;
        this.orderId=id;
        this.price=rate;
        console.log(`Order ${this.orderId} created successfully for ${this.productName} with price ${this.price}`)
    }

    placeOrder(){
        console.log(`Order placed successfully for ${this.productName}`)
    }

    cancelOrder(){
        console.log(`Order cancelled successfully for ${this.productName}`)
    }
    
}

const order1 = new Order("iPhone 16","ORD123",85000);
 order1.placeOrder();
 order1.cancelOrder();
 console.log(`product name is ${order1.productName}`);
 console.log(`product price is ${order1.price}`);
 console.log(`Order ID is ${order1.orderId}` );