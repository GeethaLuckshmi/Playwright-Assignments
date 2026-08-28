/*  Learning Objective:  
Learn to identify and return pairs of indices whose elements sum up to a specific target using nested loops in 
JavaScript. 
Assignment Details:  
Given the array, const nums = [2, 4, 7, 8, 11, 14];  
const target = 18; 
return the indices that have matching targets >> 7+11 (2, 4), 4+14 (1, 5) */

const nums = [2, 4, 7, 8, 11, 14];
let results=[];
nums.forEach(num => {
    let indexvalue = nums.indexOf(num);
    for (let i=indexvalue+1;i<=nums.length-1;i++){
        if ((num + nums[i])===18){
           console.log(`Sum of the elements ${num} and ${nums[i]} is equal to 18`); // Result provides 4+14 & 7+11
           results.push(num,nums[i]);       //adding values to the result array
           return results;                  //returns the output
        }
    }
});
console.log(results);