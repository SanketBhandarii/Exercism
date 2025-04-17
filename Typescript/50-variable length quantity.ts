export function encode(nums: number[]): number[] {
    const res: number[] = []
  
    for (let i = 0, n = nums.length; i < n; i++) {
      const bin = nums[i].toString(2), len = bin.length
      if (len < 8) res.push(nums[i])
      else {
        let j = len, newNum: number[] = []
        while (j > 0) {
          const newJ = j - 7 > 0 ? j - 7 : 0
          let newBin = bin.slice(newJ, j)
          if (j !== len) newBin = '1' + newBin.padStart(7, '0')
          newNum.unshift(parseInt(newBin, 2))
          j = newJ
        }
        res.push(...newNum)
      }
    }
  
    return res
  }
  
  export function decode(nums: number[]): number[] {
    const res: number[] = [], n = nums.length
    
    let i = 0
    while (i < n) {
      if (nums[i] < 128) {
        res.push(nums[i])
        i++
      } else {
        let count = i, newNum: string[] = [], bin = ''
        do {
          if (nums[count] === undefined) throw new Error('Incomplete sequence')
          bin = nums[count].toString(2).padStart(8, '0')
          newNum.push(bin)
          count++
        } while (bin[0] !== '0')
        res.push(parseInt(newNum.reduce((acc, v, i) => acc += v.slice(1), ''), 2))
        i = count
      }
    }
  
    return res
  }