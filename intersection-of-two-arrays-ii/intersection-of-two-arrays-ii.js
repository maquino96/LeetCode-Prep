/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    let intersection = []
    
    for(let i = 0; i < nums1.length; i++) {
    
    for(let j = 0; j < nums2.length; j++) {
       if(nums2[j] == nums1[i])  {
            intersection.push(nums2[j]);
                 nums2.splice(j, 1);
                break;
        }
        
     }
 }

 return intersection;
    
};