/* Create a TypeScript program that defines a function to compute the factorial of a given non-negative integer 
using a loop (iterative approach). */

function factorial(inputNumber:number):number{
    let result=1
    if (inputNumber<0){
        console.log(`Given number ${inputNumber} is a Negative Number`);
    
    }else if(!Number.isInteger(inputNumber)){
        console.log(`Given number ${inputNumber} is not integer`);
    }else{
        for(let i=2;i<=inputNumber;i++){
           result=result*i 
        }
        
    }return result;
}

const verifyNumber = 4.5;
const resultValue = factorial(verifyNumber);
console.log(`Factorial of ${verifyNumber} is ${resultValue}`)