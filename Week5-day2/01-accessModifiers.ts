/* Access Modifiers in TypeScript for
Automation */

class LoginTest{
    browserName:string = "Chrome";
    private password:string = "admin123";
    protected userName:string = "tester"
    static empID = 12345;

    openApplication(){

    }

    login(){
        console.log(`Private property password is ${this.password}`);
        console.log(`Protected property userName is ${this.userName}`);
        console.log(`Static property userName is ${LoginTest.empID}`);
    }

    public get readData(){
        return this.password;
    }

    public set writeData(newData:string){
        this.password = newData;
    }

}

const objAccess = new LoginTest();
objAccess.login();
console.log(objAccess.browserName);
console.log(LoginTest.empID);
console.log(objAccess.readData);
objAccess.writeData="Login123";
console.log(objAccess.readData);

