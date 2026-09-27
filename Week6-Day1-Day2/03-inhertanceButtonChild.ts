import { WebComponent } from "./03-inhertanceButton";

class Button extends WebComponent{
    override async click(){
        await super.click();
        console.log(`click action performed on the child class button`)
    } 
}

class TextInput extends WebComponent{
    value:string=""

    async enterText(text: string){
        this.value=text;
        console.log(`textbox name is ${text}`)

    }
}

const objButton = new Button("Save Button");
objButton.click();
objButton.focus();

const objTextInput = new TextInput("Login Button")
objTextInput.enterText("User Name")

const objWebComponent = new WebComponent("clear Button")
objWebComponent.focus();
objWebComponent.click();

