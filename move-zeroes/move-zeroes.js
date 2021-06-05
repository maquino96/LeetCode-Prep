/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let idx = 0
    for ( let i = 0; i < nums.length; i++){
        let tempValue; 
        if ( nums[i] !== 0 ) {
            tempValue = nums[i]
            nums[i] = nums[idx]
            nums[idx] = tempValue
            idx++
        }
        
    }

};
         
                 
/*

input: arrays of integers
output: array such that non-zeros are moved up and keep their relative order

// idx
// [0, 1, 0, 3, 12]
//  i


*/
