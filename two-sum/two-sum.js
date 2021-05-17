/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let num2;
    let half;
    
    for (let i = 0; i <= nums.length; i++) {
        if (target === 0 && nums.includes(0)) { 
            return [nums.indexOf(0), nums.lastIndexOf(0)]
        } 
        num2 = target - nums[i];
        if ( target / nums[i] === 2 && nums.lastIndexOf(num2) !== i) { return [i,                   nums.lastIndexOf(num2)] }
        if (nums.includes(num2) && nums.lastIndexOf(num2) !== i) {
            return [i, nums.indexOf(num2)]}
    }
    
};