export function isPangram(sentence) {
  const lower = sentence.toLowerCase();
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let char of alphabet) {
    if (!lower.includes(char)) {
      return false;
    }
  }
  return true;
}
