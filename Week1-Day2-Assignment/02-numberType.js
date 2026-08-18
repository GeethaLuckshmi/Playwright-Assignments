
function numberTypeValidation(number){
    if (number>0){
        console.log("Given number "+number+ " is a positive number")
    }else if (number<0){
        console.log("Given number "+number+ " is a negative number")
    }else{
       console.log("Given number "+number+ " is a neutral number") 
    }
}

let inputNumber=0
numberTypeValidation(inputNumber)