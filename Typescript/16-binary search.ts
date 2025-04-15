export function find(haystack: unknown, needle: unknown): number | never {
    if (!Array.isArray(haystack) || typeof needle !== 'number') {
      throw new Error('Invalid input');
    }
  
    let low = 0;
    let high = haystack.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const value = haystack[mid];
  
      if (value === needle) return mid;
      if (value < needle) low = mid + 1;
      else high = mid - 1;
    }
  
    throw new Error('Value not in array');
  }
  