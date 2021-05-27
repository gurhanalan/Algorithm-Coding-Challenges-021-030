"use strict";

// 21. sameFrequency
/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Your solution MUST have the following complexities: O(n) 



*/

function sameFrequency(num1, num2) {
    let str1 = num1 + "",
        str2 = num2 + "";

    if (str1.length !== str2.length) return false;

    const lookup = {};

    for (let char of str1) {
        lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
    }

    for (let char of str2) {
        if (!lookup[char]) return false;
        lookup[char] -= 1;
    }
    return true;
}

// console.log(sameFrequency(18245622, 28165422));

// ////////////////////////////////
// 22. areThereDuplicates
/*
Implement a function called, areThereDuplicates  which accepts a variable number of arguments,  and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Restrictions: 
Time - O(n) 
Space - O(n) 
Bonus:
Time - O(n logn) 
Space - O(1) 
*/

// Time - O(n)  ; Space - O(n)

function areThereDuplicates(...args) {
    const lookup = {};

    for (let char of args) {
        if (lookup[char]) return true;
        lookup[char] ? (lookup[char] += 1) : (lookup[char] = 1);
    }

    return false;
}

// Time - O(n 2) - Space - O(1)
function areThereDuplicates2(...args) {
    for (let i = 0; i < args.length; i++) {
        for (let j = i + 1; j < args.length; j++) {
            if (args[i] === args[j]) return true;
        }
    }

    return false;
}

// console.log(areThereDuplicates2(1, 2, 2)); //true
// console.log(areThereDuplicates2(1, 2, 3)); //false

///////////////////////////////////////////////
// 23. averagePair
/* 
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
Bonus Constraints // Time - O(n)  ; Space - O(1)
*/

function averagePair(arr, num) {
    let sum,
        targetsum = 2 * num;
    let i = 0,
        j = arr.length - 1;

    while (j > i) {
        sum = arr[i] + arr[j];
        // console.log(sum);
        if (targetsum === sum) return true;
        else if (targetsum < sum) j--;
        else i++;
    }
    return false;
}

// console.log(averagePair([1, 2, 3], 2.5)); //true

////////////////////////////////
// 24. isSubsequence
/* 
Write a function called  isSubsequence  which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Your solution MUST have AT LEAST the following complexities: 
Time Complexity - O(N + M)
Space Complexity - O(1)
*/

function isSubsequence(str1, str2) {
    let i = 0,
        j = 0;

    while (j < str2.length) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
            if (i === str1.length) return true;
        } else j++;
    }
    return false;
}

// console.log(isSubsequence("sing", "sting")); //true
// console.log(isSubsequence("abc", "acb")); //false
