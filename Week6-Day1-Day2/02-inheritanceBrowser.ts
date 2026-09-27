
export class Browser{
    browserName:string
    browserVersion:string

    constructor(strbrowserName:string,strbrowserVersion:string){
        this.browserName=strbrowserName;
        this.browserVersion=strbrowserVersion
        console.log(`Brower: ${this.browserName} and Version: ${this.browserVersion}`)
    }
    openURL(){
        console.log(`Application launched in ${this.browserName} brower`)
    }

    closeBrowser(){
        console.log("Application closed")
    }

    navigateBack(){
        console.log("Navigated back")
    }
}