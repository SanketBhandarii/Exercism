export const encode = (text, rails) => {
  if (rails === 1) return text;

  const fence = Array.from({ length: rails }, () => []);
  let rail = 0;
  let direction = 1;

  for (const char of text) {
    fence[rail].push(char);
    rail += direction;

    if (rail === 0 || rail === rails - 1) {
      direction *= -1;
    }
  }

  return fence.flat().join("");
};

export const decode = (cipher, rails) => {
  if (rails === 1) return cipher;

  const len = cipher.length;
  const pattern = Array(len);
  let rail = 0;
  let direction = 1;

  for (let i = 0; i < len; i++) {
    pattern[i] = rail;
    rail += direction;

    if (rail === 0 || rail === rails - 1) {
      direction *= -1;
    }
  }

  const railCounts = Array(rails).fill(0);
  pattern.forEach((r) => railCounts[r]++);

  const railsArray = Array(rails);
  let pos = 0;
  for (let r = 0; r < rails; r++) {
    railsArray[r] = cipher.slice(pos, pos + railCounts[r]).split("");
    pos += railCounts[r];
  }

  const result = [];
  for (let i = 0; i < len; i++) {
    const r = pattern[i];
    result.push(railsArray[r].shift());
  }

  return result.join("");
};
