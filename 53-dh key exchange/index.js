export class DiffieHellman {
  constructor(p, g) {
    if (!this.#isPrime(p) || !this.#isPrime(g)) {
      throw new Error("p and g must be prime numbers");
    }
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey) {
    this.#validatePrivateKey(privateKey);
    return this.#modPow(this.g, privateKey, this.p);
  }

  getSecret(theirPublicKey, myPrivateKey) {
    this.#validatePrivateKey(myPrivateKey);
    return this.#modPow(theirPublicKey, myPrivateKey, this.p);
  }

  #validatePrivateKey(key) {
    if (key <= 1 || key >= this.p) {
      throw new Error("Private key must be greater than 1 and less than p");
    }
  }

  #modPow(base, exponent, mod) {
    let result = 1;
    base = base % mod;
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % mod;
      }
      base = (base * base) % mod;
      exponent = Math.floor(exponent / 2);
    }
    return result;
  }

  #isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}
