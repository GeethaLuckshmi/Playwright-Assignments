
export class WebComponent{
    selector:string

    constructor(inputselector:string){
        this.selector=inputselector
    }

    async click(){
        console.log(`click action performed on ${this.selector}`)
    }

    async focus(){
        console.log(`focusing on the Webcomponent`)
    }

}