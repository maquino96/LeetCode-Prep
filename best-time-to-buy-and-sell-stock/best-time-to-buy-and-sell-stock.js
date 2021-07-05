/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // brute force, exceeds time limit
    // let maxprofit = 0;     
    // for ( let i = 0; i < prices.length-1; i++) {
    //     for ( let j = i+1; j < prices.length; j++) {
    //         profit = prices[j] - prices[i];
    //         if ( profit > maxprofit ) { maxprofit = profit }
    //     }
    // }
    // return maxprofit
    
    
/*
approach: 

let p1 = 0
let p2 = 1


*/
    
   
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     In formal terms, we need to find \max(\text{prices[j]} - \text{prices[i]})max(prices[j]−prices[i]), for every ii and jj such that j > ij>i.
    
      
    // one pass
    
    let minprice = Math.max(...prices)
    let maxprofit = 0
    
    for ( let i = 0; i < prices.length; i++) {
        if ( prices[i] < minprice) {
            minprice = prices[i]
        } else if ( prices[i] - minprice > maxprofit ) {
            maxprofit = prices[i] - minprice;
        }
     }
     return maxprofit
};