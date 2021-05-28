/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
        // times out on large arrays 36/37 cases
    // for ( let i = 0; i < k; i++) {
    //     nums.unshift(nums.pop())
    // }
    // return nums

    // wants nums to be modified in place
    // let front = nums.slice(nums.length-k)
    // let back = nums.slice(0,k)
    // nums = front.concat(back)
    // return nums
    
    let a = []
    for ( let i = 0; i < nums.length; i++){
        a[(i+k) % nums.length] = nums[i];
    }
    for ( let i = 0; i< nums.length; i++){
        nums[i] = a[i]
    }
    return nums 
};


/*



*/