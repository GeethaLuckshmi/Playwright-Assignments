var Order = /** @class */ (function () {
    function Order(name, id, rate) {
        this.productName = name;
        this.orderId = id;
        this.price = rate;
        console.log("Order ".concat(this.orderId, " created successfully for ").concat(this.productName, " with price ").concat(this.price));
    }
    Order.prototype.placeOrder = function () {
        console.log("Order placed successfully for ".concat(this.productName));
    };
    Order.prototype.cancelOrder = function () {
        console.log("Order cancelled successfully for ".concat(this.productName));
    };
    return Order;
}());
var order1 = new Order("iPhone 16", "ORD123", 85000);
order1.placeOrder();
order1.cancelOrder();
console.log("product name is ".concat(order1.productName));
console.log("product price is ".concat(order1.price));
console.log("Order ID is ".concat(order1.orderId));
