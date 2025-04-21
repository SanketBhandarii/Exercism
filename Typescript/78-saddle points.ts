export function saddlePoints(grid: number[][]): { row: number, column: number }[] {
    const result: { row: number, column: number }[] = []
  
    if (grid.length === 0 || grid.some(row => row.length !== grid[0].length)) {
      return result
    }
  
    const rowCount = grid.length
    const colCount = grid[0].length
  
    for (let r = 0; r < rowCount; r++) {
      const maxInRow = Math.max(...grid[r])
  
      for (let c = 0; c < colCount; c++) {
        const value = grid[r][c]
  
        if (value !== maxInRow) continue
  
        const colValues = grid.map(row => row[c])
        const minInCol = Math.min(...colValues)
  
        if (value === minInCol) {
          result.push({ row: r + 1, column: c + 1 })
        }
      }
    }
  
    return result
  }
  