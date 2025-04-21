export function isPaired(input: string): boolean {
  const stack: string[] = [];
  const openers = ["(", "[", "{"];
  const closers = [")", "]", "}"];
  const matches: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of input) {
    if (openers.includes(char)) {
      stack.push(char);
    } else if (closers.includes(char)) {
      if (stack.pop() !== matches[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
