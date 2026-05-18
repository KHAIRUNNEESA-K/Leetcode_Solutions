/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    let sortedArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            sortedArr.push(nums[i])
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            sortedArr.push(nums[i])
        }
    }
    return sortedArr;
};