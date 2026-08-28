/* Create a JavaScript program that defines a function to compute the intersection of two arrays. The 
intersection should include elements that appear in both arrays without any duplicates.  */

let arr1=[1,3,6,8,4,10,34]
let arr2=[2,3,5,8,9,10,34]
let result=[]
function intersection(array1,array2){
    array1.forEach(num => {
        if (array2.includes(num) && !result.includes(num)){ //checks whether each element from arr1 is present in arr2 as well as not present in result array
            result.push(num); //add the element num to the result array if the condition is true
        }
    });
    return result;
}
console.log(intersection(arr1,arr2)); // output is [ 3, 8, 10, 34 ]
