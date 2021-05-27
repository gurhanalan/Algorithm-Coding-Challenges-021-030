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
