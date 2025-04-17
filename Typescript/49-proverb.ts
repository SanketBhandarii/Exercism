export function proverb(...items: string[]) {
  let proverb = "";

  for (let i = 1; i < items.length; i++) {
    proverb += `For want of a ${items[i - 1]} the ${items[i]} was lost.\n`;
  }

  if (items.length > 0) {
    proverb += `And all for the want of a ${items[0]}.`;
  }

  return proverb;
}
