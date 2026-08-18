const browserName="chrome"
function getBrowserName(inputbrowserName){

    if (inputbrowserName==="chrome"){
        let browserName
    }
    console.log("Browser name is "+browserName) // output is undefined for var and chrome for let
}

getBrowserName(browserName)

//conclusion:: even if the global variable is let or const, they can be assigned with some other value inside the function or block. 
// And the newly assigned values will be available only inside that function or block.