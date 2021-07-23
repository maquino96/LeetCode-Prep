/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let ans = []
    for ( let i = 1; i <= nums.length; i++){
        let copy = nums.slice(0,i)
        let sum = 0
        for ( let j = 0; j < copy.length; j++){
            sum+=copy[j]
        }
        ans.push(sum)
    }
    return ans
};