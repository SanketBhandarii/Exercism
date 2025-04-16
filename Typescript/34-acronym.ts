export const parse = (phrase: string): string =>
  phrase
    .split(/[ -]+|(?<=[a-z])(?=[A-Z])/)
    .reduce((acrobag: string, word: string) => (acrobag += word[0]), "")
    .toUpperCase();
