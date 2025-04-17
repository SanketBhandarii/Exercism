export class DiffieHellman {
    private readonly p: number;
    private readonly g: number;
  
    constructor(p: number, g: number) {
      if (!this.isPrime(p) || !this.isPrime(g)) {
        throw new Error('Both p and g must be prime numbers.');
      }
      this.p = p;
      this.g = g;
    }
  
    public getPublicKey(privateKey: number): number {
      if (privateKey <= 1 || privateKey >= this.p) {
        throw new Error('Private key must be greater than 1 and less than p.');
      }
      return this.modPow(this.g, privateKey, this.p);
    }
  
    public getSecret(theirPublicKey: number, myPrivateKey: number): number {
      return this.modPow(theirPublicKey, myPrivateKey, this.p);
    }
  
    private modPow(base: number, exponent: number, modulus: number): number {
      if (modulus === 1) return 0;
      let result = 1;
      base = base % modulus;
      while (exponent > 0) {
        if (exponent % 2 === 1) {
          result = (result * base) % modulus;
        }
        exponent = Math.floor(exponent / 2);
        base = (base * base) % modulus;
      }
      return result;
    }
  
    private isPrime(n: number): boolean {
      if (n <= 1) return false;
      if (n <= 3) return true;
      if (n % 2 === 0 || n % 3 === 0) return false;
      for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
      }
      return true;
    }
  }
  