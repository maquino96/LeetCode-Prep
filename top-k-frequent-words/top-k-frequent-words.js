/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    
//     declare a dictionary
//     iterate through the words array and create k:v pairs word:frequency
    
//     let list = Object.entries(dictionary)
    
    const dictionary = {}
    
    for ( let i = 0; i < words.length; i++){
        if ( !dictionary[words[i]]) dictionary[words[i]] = 1
        else dictionary[words[i]]+=1
    }
    
    let list = Object.keys(dictionary);
    
    list.sort((a,b) => {
        if (dictionary[a] === dictionary[b]) return a > b ? 1 : -1 
        return dictionary[b] - dictionary[a]
    })
    
    
    return list.slice(0,k)
};