export function classify(int: number) {
  if (int <= 0)
    throw Error("Classification is only possible for natural numbers.");

  let sum: number = 0;

  for (let i = 1; i < int; i++) {
    if (int % i === 0) {
      sum += i;
    }
  }

  if (sum === int) return "perfect";
  if (sum > int) return "abundant";
  else return "deficient";
}
