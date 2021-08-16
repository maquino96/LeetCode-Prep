/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    
    const map = {}
    const count = Array(10)
    count.fill(0)
    let evens = false;
    let odds = false;
    
    const createStr = (dictionary) => {
        let tempArr = Object.entries(dictionary)
        let result = ''
        
        for (let i = 0; i < tempArr.length; i++){
            for (let j = 0; j < tempArr[i][1]; j++){
                result+= tempArr[i][0]
            }
        }
        return result
    }
    
    for (let i = 0; i < s.length; i++){
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1;
    }
    
    for (let j = 0; j < s.length; j++) {
        let x = s[j]
        
        if (x === 'z') {
            count[0]++;
            map[x]--;
            map['e']--;
            map['r']--;
            map['o']--;
            evens = true;
        }
        if ( x === 'w'){
            count[2]++;
            map[x]--;
            map['t']--;
            map['o']--;
            evens = true;
        }
        if ( x === 'u'){
            count[4]++;
            map[x]--;
            map['f']--;
            map['o']--;
            map['r']--;
            evens = true;
            
        }
        if ( x === 'x'){
            count[6]++;
            map[x]--;
            map['s']--;
            map['i']--;
            evens = true;
        }
        if ( x === 'g'){
            count[8]++;
            map[x]--;
            map['e']--;
            map['i']--;
            map['h']--;
            map['t']--;
            evens = true;
        }            
    }
    
    let newStr = evens ? createStr(map) : s 
    
    for ( let k = 0; k < newStr.length; k++){
        let y = newStr[k];
        if ( y === 'o') {
            count[1]++;
            map[y]--;
            map['n']--;
            map['e']--;
            odds = true;
        }
        if ( y === 'h') {
            count[3]++;
            map[y]--;
            map['t']--;
            map['r']--;
            map['e']--;
            map['e']--;
            odds = true; 
        }
        if ( y === 'f') {
            count[5]++;
            map[y]--;
            map['i']--;
            map['v']--;
            map['e']--;
            odds = true;
        }
        if ( y === 's') {
            count[7]++;
            map[y]--;
            map['e']--;
            map['v']--;
            map['e']--;
            map['n']--;
            odds = true; 
        }
    }
    
    let finalStr = odds ? createStr(map) : newStr
    
    for ( let l = 0; l < finalStr.length; l++){
        let z = finalStr[l];
        
        if ( z === 'i') {
            count[9]++;
            map['n']-=2;
            map['e']--;
        }
    }
    
    let result = ''

    for (let a = 0; a < count.length; a++){
        for( let b = 0; b < count[a]; b++){
            result+=a
        }
    }
    
    return result
};