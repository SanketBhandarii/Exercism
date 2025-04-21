export function isValid(isbn: unknown): boolean {
  if (typeof isbn !== "string") return false;

  const cleaned = isbn.replace(/-/g, "");
  if (!/^\d{9}[\dX]$/.test(cleaned)) return false;

  const sum = [...cleaned].reduce((acc, char, i) => {
    const value = char === "X" ? 10 : parseInt(char, 10);
    return acc + value * (10 - i);
  }, 0);

  return sum % 11 === 0;
}
