/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    
/*
    set up a dfs function that takes the current cell, grid, r, c 
    and checks the following conditions
        base case: within the grid 
        
        if checkNeighbors(cell) < 2 } checkNeighbots(cell) > 3 { cell = 0}
        if checkNeighbors(cell) === 2 || checkNeighbors(cell) === 3 && cell === 1 return
        if checkNeighbors(cell) === 3 && cell === 0 { cell = 1}
        

    checkNeighbors function
        checks all adjacent neighbors including diagonal for 'life (1)'
        returnas a count 
        
    nested loop to iterate through the nested array i j 
*/    
    
    
    let maxRows = board.length-1
    let maxColumns = board[0].length -1
    const copy = JSON.parse(JSON.stringify(board))
    
        
    const checkNeighbors = (r,c, grid) => {        
        let count = 0
        
        if ( r < 0 || c < 0 || r > maxRows || c > maxColumns) return 
        
        if(grid[r-1] && grid[r-1][c] === 1 ) count++
        if(grid[r+1] && grid[r+1][c] === 1 ) count++
        if(grid[r][c-1] && grid[r][c-1] === 1 ) count++
        if(grid[r][c+1] && grid[r][c+1] === 1 ) count++
        
        if(grid[r-1] && grid[r-1][c-1] === 1 ) count++
        if(grid[r-1] && grid[r-1][c+1] === 1 ) {count++}
        if(grid[r+1] && grid[r+1][c-1] === 1 ) count++
        if(grid[r+1] && grid[r+1][c+1] === 1 ) count++
        
        console.log(count)
        
        if (count < 2 || count > 3 ) { 
            board[r][c] = 0
            return
        }
        if ( count === 2 || count === 3 && grid[r][c] === 1) return
        if ( count === 3 && grid[r][c] === 0) { 
            board[r][c] = 1
            return
        }
    }
    
    for ( let i = 0; i <= maxRows; i++){
        for ( let j = 0; j <= maxColumns; j++){
            checkNeighbors(i,j,copy)
        }
    }
        
    return board
    
};