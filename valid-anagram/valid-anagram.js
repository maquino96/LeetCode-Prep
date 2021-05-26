/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(s.length !== t.length ) { return false }
    
    let sObj = {}
    let tObj = {}
    
    
    for (let i = 0; i < s.length; i++){
        if (sObj[s[i]]) { sObj[s[i]]=sObj[s[i]]+1
                  } else { sObj[s[i]] = 1 }
    }
    
    for (let i = 0; i < t.length; i++){
        if (tObj[t[i]]) { tObj[t[i]]=tObj[t[i]]+1
                  } else { tObj[t[i]] = 1 }
    }
    
    for ( let key in sObj ) {
        if (!tObj[key]) { return false}
        if ( tObj[key] !== sObj[key]){return false}
    }
    return true; 
};

/*

frequency counter problem

input 2 strings
output boolean value

2 strings consist of lowercase english letters

anagram, nagaram >> true
rat, car >> false

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