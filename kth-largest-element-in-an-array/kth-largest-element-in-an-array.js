/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    let sort =  nums.sort((a,b) => a - b)
    console.log(sort)
    
    return sort[sort.length-k]
    
};