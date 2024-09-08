'use strict';
// Reverse a String

function reverseString(string) {
    //const reversedString = string.split("").reduce((acc,char)=> char + acc,"");
    //const reversedString = string.split("").reverse().join("");
    const reversedString = [...string].reverse().join("")
    console.log(reversedString);
}

//reverseString('Write Anything It will Reverse');

/*----------------------------------------------------------------------------------------------------------------------------------------*/
// Simple Array Sort

function arraySort(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray
}

//console.log(arraySort([656.7, 5454, 55, .38, 1231]));

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

//console.log(addOddIndexedElements([7, 8, 9, 4, 5], [71, 8, 29, 4, 55, 3, 9, 7]));

/*----------------------------------------------------------------------------------------------------------------------------------------*/
// Two Sum

var twoSum = function (nums, target) {
    let result = [];
    for (let i = 0; i <= nums.length - 1; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i, j);
            }
        }
    }
    return result
};
// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([3, 4, 2], 6));
// console.log(twoSum([3, 3], 6));
// console.log(twoSum([3, 2, 3], 6));

/*----------------------------------------------------------------------------------------------------------------------------------------*/
// Median of Two Sorted Arrays
var findMedianSortedArrays = function (nums1, nums2) {
    let median = 0;
    let merged = [...nums1, ...nums2];
    merged.sort((a, b) => a - b);
    if (merged.length % 2 != 0) {
        median = merged[Math.trunc(merged.length / 2)];
    } else {
        median = (merged[Math.trunc(merged.length / 2)] + merged[Math.trunc(merged.length / 2 - 1)]) / 2
    }
    console.log(merged);
    return median
};

// console.log(findMedianSortedArrays([1, 3], [2]));
// console.log(findMedianSortedArrays([1, 3], [4, 2]));
// console.log(findMedianSortedArrays([10, 7 , 14], [14, 2, 5 , 13]));
