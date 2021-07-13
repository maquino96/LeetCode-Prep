/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length ) { return false }
    
    // using hashtables: ineffecicnet use of 2 tables, can be done with 1 table and         2 passes
    
//     let sObj = {}
//     let tObj = {}
    
    
//     for (let i = 0; i < s.length; i++){
//         if (sObj[s[i]]) { sObj[s[i]]=sObj[s[i]]+1
//                   } else { sObj[s[i]] = 1 }
//     }
    
//     for (let i = 0; i < t.length; i++){
//         if (tObj[t[i]]) { tObj[t[i]]=tObj[t[i]]+1
//                   } else { tObj[t[i]] = 1 }
//     }
    
//     for ( let key in sObj ) {
//         if (!tObj[key]) { return false}
//         if ( tObj[key] !== sObj[key]){return false}
//     }
//     return true; 
    
    
//  sorting approach
    let sort1 = s.split('').sort().join('')
    let sort2 = t.split('').sort().join('')
    
    console.log(sort1,sort2)
    
    return sort1 == sort2
    
    
};

/*

frequency counter problem

input 2 strings
output boolean value

2 strings consist of lowercase english letters

anagram, nagaram >> true
rat, car >> false

case, check if both string lengths are equal

let sObj = {}
let tObj = {}


loop through s, store each unique element with a value of 1
    if key exists increment counter

loop through t, store each unique element with a value of 1
    if key exists increment counter
    
for ( let key of sObj ) {
    if ( !tObj[key] ) { return false }
    if (tObj[key] !== sObj[key]) {return false}
}

return true; 

*/