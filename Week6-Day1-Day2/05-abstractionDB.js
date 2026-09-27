"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlConnection = void 0;
var MySqlConnection = /** @class */ (function () {
    function MySqlConnection() {
    }
    MySqlConnection.prototype.connect = function () {
        console.log("DB connection initiated");
    };
    MySqlConnection.prototype.disconnect = function () {
        console.log("DB connection disconnected");
    };
    MySqlConnection.prototype.executeUpdate = function () {
        console.log("Record updated");
    };
    return MySqlConnection;
}());
exports.MySqlConnection = MySqlConnection;
