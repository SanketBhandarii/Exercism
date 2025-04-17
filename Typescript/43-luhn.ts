export function valid(digitString: unknown): boolean {
    if (typeof digitString !== 'string') return false;
  
    const clean = digitString.replace(/\s+/g, '');
  
    if (!/^\d{2,}$/.test(clean)) return false;
  
    const digits = clean
      .split('')
      .reverse()
      .map((ch) => parseInt(ch));
  
    const sum = digits.reduce((acc, digit, idx) => {
      if (idx % 2 === 1) {
        let doubled = digit * 2;
        if (doubled > 9) doubled -= 9;
        return acc + doubled;
      }
      return acc + digit;
    }, 0);
  
    return sum % 10 === 0;
  }
  