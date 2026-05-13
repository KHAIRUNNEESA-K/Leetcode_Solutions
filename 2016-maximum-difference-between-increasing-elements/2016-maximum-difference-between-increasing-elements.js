/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let maxDifference = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (i < j && nums[i] < nums[j]) {
                maxDifference.push(nums[j] - nums[i])
            }
        }
    }
    if (maxDifference.length > 0) {

        maxDifference.sort((a, b) => b - a);
        return maxDifference[0];
    }
    else {
        return -1;
    }
};