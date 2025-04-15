export function countWords(text) {
  const words = text.toLowerCase().match(/\b[\w']+\b/g) || [];

  const wordMap = {};
  for (const word of words) {
    wordMap[word] = (wordMap[word] || 0) + 1;
  }
  return wordMap;
}
