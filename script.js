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

// 25. maxSubarraySum
/* 
Given an array of integers and a number, write a function called maxSubarraySum , which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive  elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
Constraints: Time Complexity - O(N)
Space Complexity - O(1)
*/

function maxSubarraySum(arr, num) {
    if (num > arr.length) return null;
    let start = 0,
        end = num;
    let total = arr.slice(start, end).reduce((acc, num) => acc + num);
    console.log(total);
    let max = total;

    while (end <= arr.length) {
        total = total - arr[start] + arr[end];
        if (total > max) max = total;
        start++;
        end++;
    }
    return max;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39

//////////////////////////////////////
// 26. minSubArrayLen
/* 
Write a function called minSubArrayLen  which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Time Complexity - O(n)
Space Complexity - O(1)

minSubArrayLen([2,3,1,2,4,3],7)  // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52)  // // 1 -> because [62] is greater than 52
*/

function minSubArrayLen(arr, num) {
    let min = Infinity;
    let total = 0;
    let end = 0,
        start = 0,
        length = 1;
    total += arr[start];
    while (end < arr.length) {
        if (total >= num && length < min) {
            min = length;

            if (min === 1) return min;
        }

        if (total >= num && start < end) {
            total -= arr[start];
            start++;
            length--;
        } else {
            end++;
            length++;
            total += arr[end];
        }
    }
    if (min == Infinity) return 0;
    return min;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 22, 33, 53], 52));

// 27. findLongestSubstring
/* 
Write a function called findLongestSubstring which accepts a string and returns the length of the longest substring with all distinct characters. Time complexity O(n).

findLongestSubstring("rithmschool")  //7
findLongestSubstring('longestsubstring') //8
findLongestSubstring('bbbbbb')  // 1
findLongestSubstring('thecatinthehat')  // 7
*/

function findLongestSubstring(str) {
    const lookup = {};
    let length = 0;
    let longest = 0;
    let lastDoubleIdx = -1;
    for (let i = 0; i < str.length; i++) {
        if (!(lookup[str[i]] || lookup[str[i]] === 0)) {
            length++;
            lookup[str[i]] = i + 1;
        } else {
            if (lastDoubleIdx < lookup[str[i]]) {
                lastDoubleIdx = lookup[str[i]];
                length = i - lastDoubleIdx;
            }
            lookup[str[i]] = i + 1;
            length++;
        }
        if (length > longest) {
            longest = length;
        }
        // console.log(str[i], length);
        // console.log(lookup);
    }
    return longest;
}

// console.log(findLongestSubstring("rithmschool"));
// console.log(findLongestSubstring("longestsubstring"));
// console.log(findLongestSubstring("bbbbbb"));
// console.log(findLongestSubstring("thecatinthehat"));
// console.log(findLongestSubstring("thisishowwedoit"));
// console.log(findLongestSubstring(""));
// console.log(findLongestSubstring("abcd"));
