/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    
    let test = x.toString()
    let negative = false
    
    if (x < 0 ){
        test = test.slice(1)
        negative = true;
    }
    
    let result = []
    
    for ( let i = test.length-1; i >= 0; i--){
        result.push(test[i])
    }
    
    if (parseInt(result.join('')) < Math.pow(2,-31) || parseInt(result.join('')) > Math.pow(2,31)){
        return 0
    }
    
    if (negative){
        return parseInt(result.join('')) * -1
    }
    return parseInt(result.join(''))
};