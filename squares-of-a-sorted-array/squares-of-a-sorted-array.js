/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result = []
    let i = 0; 
    
    while (nums[i] < 0) i++
    
    let j = i-1
    
    while ( j >= 0 ||  i < nums.length ) {
        if ( i >= nums.length || -nums[j] <= nums[i] ) { 
            result.push(nums[j]**2)
            j--
        } else {
            result.push(nums[i]**2)
            i++
        }
        console.log(i,j)
    } 
    return result

};