/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    let curr = 0
    for ( let i = 0; i*i <=x; i++){
        if(i*i === x) return i
        if(i*i < x) curr = i;
        if(i*i > x) break
    }
    
    return Math.floor(curr)
};