/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
            var start = 0, maxLen = 0;
        var map = new Map();
      
        for(var i = 0; i < s.length; i++) {
            var ch = s[i];
          
            if(map.get(ch) >= start) start = map.get(ch) + 1;
            map.set(ch, i);
          
            maxLen = Math.max(maxLen, i - start + 1);
        }
      
        return maxLen;
    
};

/*

input: string
output: longest substring

examples / ideas
- make use of a multiple pointer + a frequency counter obj to determine the longest substring

s.split(' ')

declare result = []
declare temp = []
declare freqObj = { s[0] = 1; }

declare p1 = 0
declare p2 = 1




while ( p2 < s.length ) {

    if (!freqObj[s[p2]]) {
    freqObj[s[p2]] = 1;
    temp.push(s[p2])
    
    }
    
    if (freqObj[s[p2]]) {
        if (temp.length > result.length) result = temp
        freqObj = { s[p2] = 1}
    }
    
    p2++
}

return result.length



*/