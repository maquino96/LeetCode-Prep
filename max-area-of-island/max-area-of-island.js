/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let currCount = 0
    let maxCount = 0
    
    const dfs = (grid, r, c) => {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] === 0) return
                
        grid[r][c] = 0
        currCount+=1
        maxCount = Math.max(currCount, maxCount)
        
        dfs(grid, r+1, c)
        dfs(grid, r-1, c)
        dfs(grid, r, c+1)
        dfs(grid, r, c-1)
        

    }
    
    for (let i = 0; i < grid.length; i++){
        for ( let j = 0; j < grid[0].length; j++){
            dfs(grid, i, j);
            currCount = 0
        }
    }
    
    return maxCount
    
};