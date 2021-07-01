/**
 * @param {number} n
 * @return {number}
 */
    
var countPrimes = function(n) {
   let sieve = new Array(n).fill(true);
    let primes = []
    for (let i = 2; i < Math.sqrt(n); i++){
        if (sieve[i]) {
            for (let j = Math.pow(i, 2); j < n; j+=i){
                sieve[j] = false
            }
        }
    }
    sieve.forEach((e, i) => {
        if(e && i > 1) primes.push(i)
    })

    return primes.length;
};
    
    
//     let count = 0;
//     let num = 0
    
//     while ( num < n ) {
//         if ( num===2) {
//             count++;
//         }
//         if ( num===3) {
//             count++;
//         }
//         if ( num===5){
//             count++;          
//         }
//         if( num===7){
//             count++;
//         }
//         if (num > 7){
//             if ( (num%2!==0 && num%3!==0 && num%5!==0 && num%7!==0)) {
//                 count++;
//             } 
//         }
//         num++
//         // console.log(num)
//     }
//     return count
// };