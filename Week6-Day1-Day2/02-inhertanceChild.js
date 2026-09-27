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
var _02_inheritanceBrowser_1 = require("./02-inheritanceBrowser");
var Chrome = /** @class */ (function (_super) {
    __extends(Chrome, _super);
    function Chrome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chrome.prototype.openIncognito = function () {
        console.log("Brower: ".concat(this.browserName, " opened in Incognito mode"));
    };
    Chrome.prototype.clearCache = function () {
        console.log("Cache cleared");
    };
    return Chrome;
}(_02_inheritanceBrowser_1.Browser));
var Edge = /** @class */ (function (_super) {
    __extends(Edge, _super);
    function Edge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edge.prototype.takeSnap = function () {
        console.log("Scrrenshot taken");
    };
    Edge.prototype.clearCookies = function () {
        console.log("Cookies cleared in version: ".concat(this.browserVersion));
    };
    return Edge;
}(_02_inheritanceBrowser_1.Browser));
var Safari = /** @class */ (function (_super) {
    __extends(Safari, _super);
    function Safari() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Safari.prototype.readerMode = function () {
        console.log("Reade Mode activated in Browser: ".concat(this.browserName));
    };
    Safari.prototype.fullScreenMode = function () {
        console.log("Full Screen Mode activated in version: ".concat(this.browserVersion));
    };
    return Safari;
}(_02_inheritanceBrowser_1.Browser));
var objBrowser = new _02_inheritanceBrowser_1.Browser("Chrome", "1.2.3.4");
objBrowser.openURL();
objBrowser.closeBrowser();
objBrowser.navigateBack();
var objChromeBrowser = new Chrome("Chrome", "5.6.7.8");
objChromeBrowser.openURL();
objChromeBrowser.openIncognito();
var objEdgeBrowser = new Edge("Edge", "3.2.1.0");
objEdgeBrowser.openURL();
objEdgeBrowser.clearCookies();
var objSafariBrowser = new Safari("Safari", "8.7.6.5");
objSafariBrowser.openURL();
objSafariBrowser.fullScreenMode();
objSafariBrowser.readerMode();
