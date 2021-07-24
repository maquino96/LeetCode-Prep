/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
//     if( nums.length === 1 || nums.length === 0) return nums
    
//     let p1 = 0
//     let p2 = 0
    
//     while (nums[p2] !==0 && p2 < nums.length) p2++
    
//     for ( let i = 0; i < nums.length; i++) {

//         if ( nums[p2] === 0 && nums[p1] !== 0 ) {
//             temp = nums[p1];
//             nums[p1] = nums[p2]
//             nums[p2] = temp
//             p1++
//         }
//         p2++
//         console.log(p1,p2)
//     }
    
//     p1 = 0
//     p2 = 0
    
//     while( nums[p2] !== 1 && p2 < nums.length ) p2++

//     for ( let j = 0; j < nums.length; j++) {

//     if ( nums[p2] === 1 && nums[p1] !== 1 ) {
//         temp = nums[p1];
//         nums[p1] = nums[p2]
//         nums[p2] = temp
//         p1++
//     }
        
//     p2++ 
        
//     console.log(`loop2 `+p1+` `+p2)
//     }   
//     return nums
    
    let temp;
    let c0=0, c1=0;
    
    for (i=0; i<nums.length; i++) {
        temp = nums[i];
        if (temp === 1) {
            nums[i] = nums[c0+c1];
            nums[c0+c1] = 1;
            c1++;
        } else if (temp === 0) {
            nums[i] = nums[c0+c1];
            nums[c0+c1] = 1;
            nums[c0] = 0;
            c0++;
        }
    }
};