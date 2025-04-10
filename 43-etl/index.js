export const transform = (old) => {
  const newFormat = {};

  for (const [score, letters] of Object.entries(old)) {
    for (const letter of letters) {
      newFormat[letter.toLowerCase()] = Number(score);
    }
  }

  return newFormat;
};
