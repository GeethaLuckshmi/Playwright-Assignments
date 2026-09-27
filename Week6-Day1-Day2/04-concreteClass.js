"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _04_abstractionPayments_1 = require("./04-abstractionPayments");
var Amazon = /** @class */ (function (_super) {
    __extends(Amazon, _super);
    function Amazon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Amazon.prototype.recordPaymentDetails = function () {
        console.log("Payment successful");
    };
    return Amazon;
}(_04_abstractionPayments_1.CanaraBank));
var objPayment = new Amazon();
objPayment.cardPayments();
objPayment.cashOnDelivery();
objPayment.internetBanking();
objPayment.recordPaymentDetails();
objPayment.upiPayments();
