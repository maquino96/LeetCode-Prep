// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function(nums, k) {
    
//     let sort =  nums.sort((a,b) => a - b)
//     console.log(sort)
    
//     return sort[sort.length-k]
    
// };

var findKthLargest = function(nums, k) {
    
    
    const swap = (a,b) => {
        let temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp;
    }
    
    const partition = ( left, right, pivotIdx) => {
        
        //move pivot to the end
        let pivot = nums[pivotIdx];
        swap(pivotIdx, right)     
        let storeIdx = left
        
        //move all smaller elements to the left
        
        for (let i = left; i <= right; i++) {
            if (nums[i] < pivot){
                swap(storeIdx, i);
                storeIdx++;
            }
        }
        // move pivot to its final place
        swap(storeIdx, right)
        return storeIdx
    }
    
    const quickSelect = (left, right, kthSmallest) => {
        if ( left === right) return nums[left]
        
        let random = (max) => Math.floor(Math.random()*(max))
        
        let pivotIdx = left + random(right-left)
        
        pivotIdx = partition(left,right, pivotIdx)
        
        //pivt is on the (N-k)th smallest position
        
        if (kthSmallest === pivotIdx) return nums[kthSmallest]
        
        else if ( kthSmallest < pivotIdx) {
            return quickSelect( left, pivotIdx-1, kthSmallest)
        }
        return quickSelect ( pivotIdx + 1, right, kthSmallest)
        
    }
    
    return quickSelect(0, nums.length-1, nums.length-k)   
    
};