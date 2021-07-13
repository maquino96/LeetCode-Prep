/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor, firstColor = image[sr][sc]) {
    
    
    /*
    given an m x n matrix (image), starting coordinate (image[sr][sc]), and newColor
    
    return a 'new' image that's been changed 4-directionally
     
    */
    
    
    
//     let initial = image[sr][sc]
//     let n = sr-1
//     let s = sr+1
//     let e = sc+1
//     let w = sc-1
    
    
//     console.log(n,s,e,w)
    
//     if (n >= 0) {
//         image[n][sc] = newColor
//         if (n===0) return image
//         floodFill(image, n, sc, newColor)
//     }
    
//     if (s < image.length) {
//         image[s][sc] = newColor
//         if(s === image.length - 1) return image
//         floodFill(image, s, sc, newColor)
//     }
//     if (e < image[0].length) {
//         image[sr][e] = newColor
//         if (e === image[0].length) return image
//         floodFill(image, sr, e, newColor)
//     }
//     if (w >= 0) {
//         image[sr][w] = newColor
//         if ( w === 0) return image
//         floodFill(image, sr, w, newColor)
//     }
    
    

    // handle if the coordinate is out of bounds
	// or if it is already the new color
	// or if it's not from the original color we're trying to change
    if (sr < 0 || sc < 0 || sr >= image.length || sc >= image[sr].length || image[sr][sc] !== firstColor || image[sr][sc] === newColor)   {
        return image; // return image as-is
    }
    
    image[sr][sc] = newColor;
    
    floodFill(image, sr + 1, sc, newColor, firstColor);
    floodFill(image, sr - 1, sc, newColor, firstColor);
    floodFill(image, sr, sc + 1, newColor, firstColor);
    floodFill(image, sr, sc - 1, newColor, firstColor);
    
	// return modified image
    return image;

    
};