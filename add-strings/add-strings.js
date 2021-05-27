/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    if(num1.length>num2.length) num2 = num2.padStart(num1.length,"0");
    else num1 = num1.padStart(num2.length,"0");
    var result = new Array(num1.length+1).fill(0);
    for(i=result.length-1, j=num1.length-1 ;j>=0 ;i--, j--){
        k = parseInt(num1[j])+parseInt(num2[j])+parseInt(result[i]);
        if(k>=10) result[i-1]=1, k%=10;  
        result[i]=k;
    }
    if(result[0]===0) result.shift();
    return result.join("");
};