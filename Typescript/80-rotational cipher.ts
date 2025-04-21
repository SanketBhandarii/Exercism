export function rotate(text: string, key: number): string {
  return text
    .split("")
    .map((char) => shiftChar(char, key))
    .join("");
}

function shiftChar(char: string, key: number): string {
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  const A = "A".charCodeAt(0);
  const Z = "Z".charCodeAt(0);
  const code = char.charCodeAt(0);

  if (code >= a && code <= z) {
    return String.fromCharCode(((code - a + key) % 26) + a);
  }

  if (code >= A && code <= Z) {
    return String.fromCharCode(((code - A + key) % 26) + A);
  }

  return char;
}
