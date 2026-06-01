/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
    let reversed = [...nums].reverse();
    let result = nums.concat(reversed);
    return result;
};