export const parse = (phrase) => {
  return phrase
    .replace(/[^a-zA-Z\s-]/g, "")
    .split(/[\s-]+/)
    .filter((word) => word.length > 0)
    .map((word) => word[0].toUpperCase())
    .join("");
};
