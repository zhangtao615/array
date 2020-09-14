var minPathSum = function(grid) {
    if(grid == null || grid.length == 0 || grid[0].length == 0) return 0;
    // else{
    //     let m = grid.length-1, n = grid[0].length-1;
    //     let minPath = grid[m][n];
    //     while(m>=0 || n>=0){
    //         if(grid[m-1][n] > grid[m][n-1] && m !==0 && n !== 0){
    //             minPath += grid[m][n-1];
    //             n--;
    //             console.log(minPath)
    //         }else if(grid[m-1][n] < grid[m][n-1] && m !==0 && n !== 0){
    //             minPath += grid[m-1][n];
    //             m--;
    //             console.log(minPath)
    //         }else if(grid[m-1][n] < grid[m][n-1]){
    //             minPath += grid[m-1][n];
    //             m--;
    //             n--;
    //             console.log(minPath)
    //         }else if(m === 0){
    //             while(n>0){
    //                 minPath += grid[0][n];
    //                 n--;
    //             }
    //             console.log(minPath);
    //         }else if(n === 0){
    //             while(m>0){
    //                 minPath += grid[m][0];
    //                 m--;
    //             }
    //             console.log(minPath);
    //         }
    //     }
    //     console.log(minPath);
    //}
        let rows = grid.length, columns = grid[0].length;
        let dp = [];
        dp[0][0] = grid[0][0];
        for (let i = 1; i < rows; i++) {
            dp[i][0] = dp[i - 1][0] + grid[i][0];
        }
        for (let j = 1; j < columns; j++) {
            dp[0][j] = dp[0][j - 1] + grid[0][j];
        }
        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < columns; j++) {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            }
        }
        return dp[rows - 1][columns - 1];
};

minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]
]);

/*  解题思路
    1.逆向行走+递归
        每次行走只能向下或者向右走一步

*/