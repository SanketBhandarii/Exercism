const charSet = 'abcdefghijklmnopqrstuvwxyz'.split('')

export class SimpleCipher {
  constructor(public key: string = '') {
    if(key === '') {
      this.generateKey()
    } else {
      this.key = key
    }
  }

  generateKey() {
    let result = ''
    
    for (let i = 0; i < 100; i++) {
        let randomPoz = Math.floor(Math.random() * charSet.length)
        result += charSet[randomPoz]
    }
    
    this.key = result
  }
  
  encode(str: string) {
    while(str.length > this.key.length) {
      this.key = this.key.concat(this.key)
    }
    return str.split('').map((letter, index) => charSet[(charSet.indexOf(letter) + charSet.indexOf(this.key[index])) % charSet.length]).join('')
  }

  decode(str: string) {
    while(str.length > this.key.length) {
      this.key = this.key.concat(this.key)
    }
    return str.split('').map((letter, index) => {
      let i = charSet.indexOf(letter) - charSet.indexOf(this.key[index])
      while(i < 0) {
        i = i + charSet.length
      }
      return charSet[i % charSet.length]
    }).join('')
  }
}