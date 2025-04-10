export const isIsogram = (input) => {
  const letters = input.toLowerCase().replace(/[^a-z]/g, "");

  const seen = new Set();

  for (const char of letters) {
    if (seen.has(char)) return false;
    seen.add(char);
  }

  return true;
};
