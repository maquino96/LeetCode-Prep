/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
    
        let left = 1;
        let right = n;
        
        while ( left < right ) {
            let mid = Math.floor(left +  (right - left ) / 2);
            if (isBadVersion(mid)){
                right = mid;
            } else {
                left = mid + 1
            } 
        }
        return left 
    };
};

/* input n = number of versions
 output: initial bad version

example: binary search

let left = 0
let right = n
let mid = Math.floor(n/2)

while (left < right) {
    if (n === 1 || n === 0) { return n}
    if ( isBadVersion(mid) && !isBadVersion(mid-1)) { return mid }
    
    if ( isBadVersion(mid) ) {
        right = mid
        mid = Math.floor((left + right) /2)
    }
    
    if ( !isBadVersion(mid) ) {
        left = mid
        mid = Math.flor((left+right) / 2 )
    }
}


*/

