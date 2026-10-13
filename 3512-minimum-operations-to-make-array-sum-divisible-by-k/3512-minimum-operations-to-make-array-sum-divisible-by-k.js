/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    let sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    let numOfOperations = sum % k;
    return numOfOperations;
};