const alphabet = "abcdefghijklmnopqrstuvwxyz";
const cipher = alphabet.split("").reverse().join("");

const atbashMap: Record<string, string> = {};
for (let i = 0; i < alphabet.length; i++) {
  atbashMap[alphabet[i]] = cipher[i];
}

function cleanInput(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function transform(text: string): string {
  return [...text]
    .map((char) => {
      if (/[a-z]/.test(char)) return atbashMap[char];
      return char;
    })
    .join("");
}

export function encode(plainText: unknown): string {
  if (typeof plainText !== "string") throw new Error("Invalid input");

  const cleaned = cleanInput(plainText);
  const encoded = transform(cleaned);

  return encoded.match(/.{1,5}/g)?.join(" ") ?? "";
}

export function decode(cipherText: unknown): string {
  if (typeof cipherText !== "string") throw new Error("Invalid input");

  const cleaned = cleanInput(cipherText);
  return transform(cleaned);
}
