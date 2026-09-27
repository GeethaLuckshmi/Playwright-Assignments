"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var Browser = /** @class */ (function () {
    function Browser(strbrowserName, strbrowserVersion) {
        this.browserName = strbrowserName;
        this.browserVersion = strbrowserVersion;
        console.log("Brower: ".concat(this.browserName, " and Version: ").concat(this.browserVersion));
    }
    Browser.prototype.openURL = function () {
        console.log("Application launched in ".concat(this.browserName, " brower"));
    };
    Browser.prototype.closeBrowser = function () {
        console.log("Application closed");
    };
    Browser.prototype.navigateBack = function () {
        console.log("Navigated back");
    };
    return Browser;
}());
exports.Browser = Browser;
