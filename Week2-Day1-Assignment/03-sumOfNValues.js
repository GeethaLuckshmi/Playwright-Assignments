/* Write a function to sum all the values between 1 and n, and return the sum 
Take n = 5, print between 1 and 5, and keep adding the sum of values  
i.e., 1+2=3, 3+3 =6, 6+4=10, 10+5 =15  */

let sum=0;
let result;
let nextNum;
function sumOfNNumbers(startNumber,endNumber){
    
    for (let i=1;i<=endNumber-1;i++){
        if (i<=startNumber){
            nextNum = i+1;                                  //getting the next number of i
            result = i +nextNum;                            // addition of first and second number(1+2)
            console.log(` ${i} \+ ${nextNum} \= ${result}`); //for the first addition 1+2=3
        }else {
            nextNum = i+1;                                      //getting the next number of i
            sum = result +nextNum;                              // adding the previous iteration result with the next number of i
            console.log(` ${result} \+ ${nextNum} \= ${sum}`); //from second number addition 3+3=6, 6+4=10, 10+5=15
            result = sum;
        }    
        
        
    }
}
sumOfNNumbers(1,5)  //function call

/*Result:
1 + 2 = 3
 3 + 3 = 6
 6 + 4 = 10
 10 + 5 = 15*/
