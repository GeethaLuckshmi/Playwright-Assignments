
function launchBrowser(browserName){
    if (browserName==="chrome"){
        console.log("Chrome browser is launched")
    }else if (browserName==="edge"){
        console.log("edge browser is launched")
    }else if (browserName==="firefox"){
        console.log("firefox browser is launched")
    }else {
        console.log("unknown browser is launched")
    }
}

function runTests(testingType){
    switch (testingType){
        case "sanity":
           console.log("sanity testing initiated");
           break;
        case "regression":
           console.log("regression testing initiated");
           break;
        default:
            console.log("smoke testing initiated");
            break;
    }

}

launchBrowser("none")
runTests("none")