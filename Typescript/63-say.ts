
const SMALL_NUMBERS = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ]
  
  const TENS = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ]
  
  export function sayInEnglish(num: number): string {
    switch (true) {
      case (0 <= num && num < 20):
        return SMALL_NUMBERS[num];
      case (20 <= num && num < 100):
        {
          const q = Math.floor(num / 10);
          const r = num % 10;
          if (r !== 0) {
            return [TENS[q], sayInEnglish(r)].join("-");
          }
          return TENS[q]
        }
      case (100 <= num && num < 1000):
        return say_divmod(num, 100, "hundred");
      case (1000 <= num && num < 1_000_000):
        return say_divmod(num, 1000, "thousand");
      case (1_000_000 <= num && num < 1_000_000_000):
        return say_divmod(num, 1_000_000, "million");
      case (1_000_000_000 <= num && num < 1_000_000_000_000):
        return say_divmod(num, 1_000_000_000, "billion");
      default:
        throw new Error("Number must be between 0 and 999,999,999,999.");
    }
  }
  
  function say_divmod(num: number, n: number, word: string): string {
    const q = Math.floor(num / n);
    const r = num % n;
    if (r !== 0) {
      return [sayInEnglish(q), word, sayInEnglish(r)].join(" ");
    }
    return [sayInEnglish(q), word].join(" ");
  }