/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // does not work with BigInt values
    // let newNum = parseInt(array.join(''))+1
    // console.log(newNum)
    // return newNum.toString().split('').map( el => parseInt(el))    
    
    n = digits.length
    
    for (let idx = n-1; idx >= 0; idx--){
        if(digits[idx] === 9) {
            digits[idx] = 0 
        } else {
            digits[idx]++
            return digits
        }
    }
    return [1].concat(digits)
    
};

/*
input: array of digits
output: array of digits

increment the represented integer by one

e.g. [1,2,3] >> 123+1 = 1234 >> [1,2,3,4]

edge case [9, 9, 9] // can't just increment the last number in the array

parseInt(Array.join('')) + 1

*/