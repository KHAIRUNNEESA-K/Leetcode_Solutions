/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let frequency = {};
    for (let i = 0; i < nums.length; i++) {
        if (frequency[nums[i]]) {
            frequency[nums[i]]++
        }
        else {
            frequency[nums[i]] = 1
        }
    }
    nums.sort((a, b) => {
        if (frequency[a] == frequency[b]) {
            return b - a;
        }
        return frequency[a] - frequency[b]
    });
    return nums;
};