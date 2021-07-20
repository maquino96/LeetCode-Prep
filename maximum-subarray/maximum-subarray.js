/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let subSum = nums[0]
    let max = nums[0]
    
    for(let i = 1; i < nums.length; i++) {
        // if the sum of the subarray is negative we're no longer interested and start         summin again starting at the current value
        subSum = Math.max(subSum + nums[i], nums[i])

        // tracks the subarray with the highest sum found
        max = Math.max(subSum, max)
    }
    
    return max
};