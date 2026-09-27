"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanaraBank = void 0;
var CanaraBank = /** @class */ (function () {
    function CanaraBank() {
    }
    CanaraBank.prototype.cashOnDelivery = function () {
        console.log("Payment type selected as Cash on delivery");
    };
    CanaraBank.prototype.upiPayments = function () {
        console.log("Payment type selected as UPIPayments");
    };
    CanaraBank.prototype.cardPayments = function () {
        console.log("Payment type selected as CardPayments");
    };
    CanaraBank.prototype.internetBanking = function () {
        console.log("Payment type selected as internet Banking");
    };
    return CanaraBank;
}());
exports.CanaraBank = CanaraBank;
