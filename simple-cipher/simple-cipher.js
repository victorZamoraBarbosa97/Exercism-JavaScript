export class Cipher {
  constructor(key) {
    const isValid = /^[a-z]+$/.test(key || "");
    this._key = isValid ? key : Cipher.generateRandomKey();
  }

  static generateRandomKey() {
    let result = "";
    const chars = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 100; i++) {
      result += chars[Math.floor(Math.random() * 26)];
    }
    return result;
  }

  encode(text) {
    return [...text]
      .map((char, i) => {
        const shift = this._key.charCodeAt(i % this._key.length) - 97;
        const code = ((char.charCodeAt(0) - 97 + shift) % 26) + 97;
        return String.fromCharCode(code);
      })
      .join("");
  }

  decode(text) {
    return [...text]
      .map((char, i) => {
        const shift = this._key.charCodeAt(i % this._key.length) - 97;
        const code = ((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97;
        return String.fromCharCode(code);
      })
      .join("");
  }

  get key() {
    return this._key;
  }
}
