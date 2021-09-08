/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 ) return s
    if (numRows >= s.length) return s
    
    const queue = []
    s = s.split('')
    
    let count = 1
    let reverse = false
    
    const result = []
    
    for ( let i = 0; i < s.length; i++){
        if (!reverse && count < numRows ) {
            queue.push([s[i], count]);
            count++;
            if (count === numRows ) continue;
        }
        if ( reverse && count !== 1) {
            queue.push([s[i], count])
            count--;
            if (count === 1 ) continue;
        }
        if ( count === 1 && reverse ) {
            queue.push([s[i], count])
            reverse = false
            count++
            if (count === numRows) continue;
        }
        if (count === numRows) {
            reverse = true
            queue.push([s[i], count])
            count--
        }
    }
    console.log(queue)
    queue.sort((a,b)=> a[1]-b[1]).forEach(el => result.push(el[0]))
    return result.join('')
};