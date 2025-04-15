export const compute = (strand1, strand2) => {
    if (strand1.length !== strand2.length) {
      throw new Error('strands must be of equal length');
    }
  
    return [...strand1].reduce((count, char, i) => {
      return count + (char !== strand2[i] ? 1 : 0);
    }, 0);
  };
  