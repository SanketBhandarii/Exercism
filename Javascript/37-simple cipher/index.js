export class Cipher {
  constructor(key = Cipher.generateKey()) {
    if (!/^[a-z]+$/.test(key)) throw new Error("Bad key");
    this.key = key;
  }

  static generateKey(length = 100) {
    return Array.from({ length }, () =>
      String.fromCharCode(97 + Math.floor(Math.random() * 26))
    ).join("");
  }

  encode(text) {
    return this.transform(text, 1);
  }

  decode(text) {
    return this.transform(text, -1);
  }

  transform(text, dir) {
    return text
      .split("")
      .map((char, i) => {
        const shift = this.key.charCodeAt(i % this.key.length) - 97;
        return String.fromCharCode(
          97 + ((26 + char.charCodeAt(0) - 97 + dir * shift) % 26)
        );
      })
      .join("");
  }
}
