// Unique
//  *
//  * Given an array of integers, return an array with all duplicates removed.*
//  *
//  * Parameters
//  * Input: arr {Array of Integers}
//  * Output: {Array of Integers}
//  *
//  * Constraints
//  *
//  * Time: O(N)
//  * Space: O(N)
//  *
//  * Examples
//  * [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
//  * [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
//  * [1, 2, 3, 1, 2] --> [1, 2, 3]
//  */

'use strict';

function unique(arr) {
    let seen = {};
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      seen[arr[i]] = 1;
    }
    for (let key in seen) {
      results.push(Number(key));
    }
    return results;
}