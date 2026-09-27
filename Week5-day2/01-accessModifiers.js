/* Access Modifiers in TypeScript for
Automation */
var LoginTest = /** @class */ (function () {
    function LoginTest() {
        this.browserName = "Chrome";
        this.password = "admin123";
        this.userName = "tester";
    }
    LoginTest.prototype.openApplication = function () {
    };
    LoginTest.prototype.login = function () {
        console.log("Private property password is ".concat(this.password));
        console.log("Protected property userName is ".concat(this.userName));
        console.log("Static property userName is ".concat(LoginTest.empID));
    };
    Object.defineProperty(LoginTest.prototype, "readData", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LoginTest.prototype, "writeData", {
        set: function (newData) {
            this.password = newData;
        },
        enumerable: false,
        configurable: true
    });
    LoginTest.empID = 12345;
    return LoginTest;
}());
var objAccess = new LoginTest();
objAccess.login();
console.log(objAccess.browserName);
console.log(LoginTest.empID);
console.log(objAccess.readData);
objAccess.writeData = "Login123";
console.log(objAccess.readData);
