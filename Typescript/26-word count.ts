export function count(str: string): Map<string, number> {
    const words = (str.match(/\b\w+('\w+)?\b/g) || []).map((word) =>
      word.toLowerCase()
    );
  
    return words.reduce((acc, word) => {
      acc.set(word, (acc.get(word) || 0) + 1);
      return acc;
    }, new Map<string, number>());
  }