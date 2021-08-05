/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let islands = 0
    
    let mr = grid.length
    let mc = grid[0].length
    
    const dfs = (grid,r,c) => {
        if ( r < 0 || c < 0 || r >= mr || c >= mc || grid[r][c] === '0') return
        
        grid[r][c] = '0'
        dfs(grid,r-1,c)
        dfs(grid,r+1,c)
        dfs(grid,r,c-1)
        dfs(grid,r,c+1)
    }
    
    for ( let i = 0; i < mr; i++){
        for (let j = 0; j < mc; j++) {
            if (grid[i][j] === '1'){
                islands+= 1
                dfs(grid, i, j)
            }
        }
    }
    
    return islands
    
};