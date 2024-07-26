'use strict';
// Reverse a String

function reverseString(string) {
    //const reversedString = string.split("").reduce((acc,char)=> char + acc,"");
    //const reversedString = string.split("").reverse().join("");
    const reversedString = [...string].reverse().join("")
    console.log(reversedString);
}

reverseString('Write Anything It will Reverse');

/*----------------------------------------------------------------------------------------------------------------------------------------*/
// Simple Array Sort

function arraySort(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray
}

console.log(arraySort([656.7, 5454, 55, .38, 1231]));

/*----------------------------------------------------------------------------------------------------------------------------------------*/
// Add odd indexed of 2 arrays and keep the sum inside a new array

function addOddIndexedElements(arr1, arr2) {
    let oddArr1 = [];
    let oddArr2 = [];
    let sumedArr = [];
    for (let i = 0; i < arr1.length - 1; i++) {
        if (i % 2 != 0) {
            oddArr1.push(arr1[i])
        }
    }
    for (let i = 0; i < arr2.length - 1; i++) {
        if (i % 2 != 0) {
            oddArr2.push(arr1[i])
        }
    }
    sumedArr = oddArr1.map((num, index) => num + oddArr2[index]);
    return sumedArr;
}

console.log(addOddIndexedElements([7, 8, 9, 4, 5], [71, 8, 29, 4, 55, 3, 9, 7]));

/*----------------------------------------------------------------------------------------------------------------------------------------*/