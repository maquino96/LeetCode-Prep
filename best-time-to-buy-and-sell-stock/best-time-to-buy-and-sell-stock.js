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