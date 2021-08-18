/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max = -Infinity
    let temp = 0
    
    for ( let i = 0; i < nums.length; i++){
        temp = Math.max( nums[i], temp + nums[i])
        max = temp > max ? temp : max
    }
        
    return max

};