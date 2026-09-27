/* Create a TypeScript program that defines a function to compute the nth Fibonacci number using a loop (iterative approach). */

function FibonacciSeries(inputNumber:number){
    let result=0;
    let finResult=0;
    let temp=[0,1];
    if (inputNumber<0){
        console.log(`Given number ${inputNumber} is a Negative Number`);
    
    }else if(!Number.isInteger(inputNumber)){
        console.log(`Given number ${inputNumber} is not integer`);
    }else{
        for(let i=2;i<=inputNumber;i++){
            if (inputNumber===0){
                return result;
            }else{
                result=temp[i-2]+temp[i-1]   
                temp.push(result);

            }
        }
        
    }console.log(temp);
}
const inputValue=12;
FibonacciSeries(inputValue)
