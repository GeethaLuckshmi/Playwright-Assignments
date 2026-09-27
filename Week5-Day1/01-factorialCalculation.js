/* Create a TypeScript program that defines a function to compute the factorial of a given non-negative integer
using a loop (iterative approach). */
function factorial(inputNumber) {
    var result = 1;
    if (inputNumber < 0) {
        console.log("Given number ".concat(inputNumber, " is a Negative Number"));
    }
    else if (!Number.isInteger(inputNumber)) {
        console.log("Given number ".concat(inputNumber, " is not integer"));
    }
    else {
        for (var i = 2; i <= inputNumber; i++) {
            result = result * i;
        }
    }
    return result;
}
var verifyNumber = 4.5;
var resultValue = factorial(verifyNumber);
console.log("Factorial of ".concat(verifyNumber, " is ").concat(resultValue));
