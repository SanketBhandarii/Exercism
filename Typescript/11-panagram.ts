export function isPangram(sentence: string): boolean {
  const alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  const normalized = sentence.toLowerCase();

  for (const char of normalized) {
    alphabet.delete(char);
    if (alphabet.size === 0) return true;
  }

  return false;
}
