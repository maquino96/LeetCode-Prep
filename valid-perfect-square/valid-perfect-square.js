/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
//     let n = Math.ceil(num/2)
    
//     let square = false
    
//     for ( let i = 0; i <= n; i++){
//         if ( i**2 === num) square = true
//     }
    
//     return square
    
    for ( let i = 0; i*i <= num; i++){
        if (i*i === num ) return true
        if (i*i > num ) return false
    }
    return false
};