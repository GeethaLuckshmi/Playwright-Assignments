/* Learning Objective:  
Understand different ways to declare functions in JavaScript and how to use callback functions.  
 */

// 01 - named function
function userProfile(username){
    console.log(`Hello ${username}`);
}

// 02 - Arrow function

let double = inputNumber => console.log(inputNumber+inputNumber);

//03 anonymous function or Function expression
let anonymousFunction = function(){
    console.log("This message is delayed by 2 seconds");
}

//04 Callback function
function getUserData(getPrintData){
    setTimeout(getPrintData,3000);
}
function printData(){
    console.log("Call Back Function");
}

userProfile("Geetha M");
double(3);
setTimeout(anonymousFunction,2000);
getUserData(printData);