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
