/* Create a TypeScript program that defines a function to compute the nth Fibonacci number using a loop (iterative approach). */
function FibonacciSeries(inputNumber) {
    var result = 0;
    var finResult = 0;
    var temp = [0, 1];
    if (inputNumber < 0) {
        console.log("Given number ".concat(inputNumber, " is a Negative Number"));
    }
    else if (!Number.isInteger(inputNumber)) {
        console.log("Given number ".concat(inputNumber, " is not integer"));
    }
    else {
        for (var i = 2; i <= inputNumber; i++) {
            if (inputNumber === 0) {
                return result;
            }
            else {
                result = temp[i - 2] + temp[i - 1];
                temp.push(result);
            }
        }
    }
    console.log(temp);
}
var inputValue = 12;
FibonacciSeries(inputValue);
