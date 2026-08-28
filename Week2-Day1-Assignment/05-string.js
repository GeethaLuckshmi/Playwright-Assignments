/* Learn how to manipulate strings and use looping statements in a programming language to solve practical 
problems.  */

//Given a string s consisting of words and spaces, return the length of the last word in the string. 
let inputString = "Here is my wonder";
let arryString = inputString.split(" ");            //split the sentence using the delimiter as space
let arryLength = arryString.length;                 // get the length of an array
let lastWordLength = arryString[arryLength-1].length;   //get the length of the last word
console.log(`Last word is ${arryString[arryLength-1]} & it's length is ${lastWordLength}`);

//Input: s = "   fly me   to   the moon  "
let inputString2 = "   fly me   to   the moon  ";
let arryString2 = (inputString2.trim()).split(" ");            //remove the space in both ends and split the sentence using the delimiter as space
let arryLength2 = arryString2.length;                 // get the length of an array
let lastWordLength2 = arryString2[arryLength2-1].length;   //get the length of the last word
console.log(`Last word is ${arryString2[arryLength2-1]} & it's length is ${lastWordLength2}`);

//Write a function to check if two strings are anagrams.
function verifyAnagram(str1,str2){ 
    str1UpperCase =  str1.toUpperCase().split("")
    str2UpperCase =  str2.toUpperCase().split("")
    if (str1UpperCase.sort().join("") === str2UpperCase.sort().join("")){
        console.log(`The given words are anagram: Word1 is ${str1UpperCase.sort().join("")} and word2 is ${str2UpperCase.sort().join("")}`);
    }else{
        console.log(`The given words are not anagram: Word1 is ${str1UpperCase.sort().join("")} and word2 is ${str2UpperCase.sort().join("")}`);
    }
}
let str1UpperCase;
let str2UpperCase;
verifyAnagram("listen","silent")