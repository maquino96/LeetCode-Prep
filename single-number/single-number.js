/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(array) {
    
    let countObj = {}
    
    for ( let i = 0; i< array.length; i++){
        if ( countObj[array[i]]) { countObj[array[i]]++
        } else { countObj[array[i]] = 1}
    }

    for ( key in countObj) {
        if ( countObj[key] === 1) { return key}
    }
};

/*

input: non-empty array of integers
output: integer that only appears once

O(n)
O(1)

frequency counter

let countObj = {}

2 loops

for ( let i = 0; i< array.length; i++){
    if ( countObj[array[i]]) { countObj[array[i]]++
    } else { countObj[array[i]] = 1}
}

for ( key in countObj) {
    if ( countObj[key] === 1) { return key}
}


*/