/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let freqObj = {}
    let result = []
    
    for ( let i = 0; i < nums1.length; i++) {
        if ( !freqObj[nums1[i]]) freqObj[nums1[i]] = 1
    }
    
    for ( let j = 0; j < nums2.length; j++) { 
        if ( freqObj[nums2[j]]) freqObj[nums2[j]]++

    }
    
    for ( let key in freqObj ) {
        if ( freqObj[key] !== 1) result.push(key)
    }
    
    return result
    
};

/*

input 2 arrays
output array of unique intersecting values

let freqObj = {}
let result = []


loop through array 1
    if int !== in freqObj set key to int = 1
    
loop through array 2
    if int exists in freqObj, freqObj[int] +=1
    
loop through freqObj
    if key !== 1, result.push(key)

return result


time: O(3n) >> O(n)
space: O(n)


*/