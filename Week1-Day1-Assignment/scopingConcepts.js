//GenderTypevalidation
let genderType="male"
function printGender(){
    let color='brown'
    if (genderType.startsWith("female")) {
        var age=30
        let color="pink"
        console.log("Blocked scoped validation: color is: "+color) //prints 'pink' for female. Nothing printed since the condition is false.
    }
    console.log("Function scoped validation: age is: "+age) //prints '30' if for female. Prints undefined if the gendertype is male
}
printGender()
console.log("Global variable validation: GenderType is: "+genderType) //prints 'female' for female. Prints 'male' if the gendertype is male.