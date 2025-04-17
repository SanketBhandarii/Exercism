export function encode(input: string): string {
  if (input.length === 0) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      result += (count > 1 ? count : "") + input[i - 1];
      count = 1;
    }
  }

  return result;
}

export function decode(input: string): string {
  let result = "";
  let count = "";

  for (const char of input) {
    if (/\d/.test(char)) {
      count += char;
    } else {
      const repeat = parseInt(count || "1", 10);
      result += char.repeat(repeat);
      count = "";
    }
  }

  return result;
}
