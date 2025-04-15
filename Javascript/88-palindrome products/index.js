export class Palindromes {
    static generate({ minFactor = 1, maxFactor }) {
        if (minFactor > maxFactor) {
            throw new Error('min must be <= max')
        }

        return new Palindromes(minFactor, maxFactor)
    }

    constructor(minFactor, maxFactor) {
        this.minFactor = minFactor
        this.maxFactor = maxFactor
    }

    get smallest() {
        const smallest = { value: null, factors: [] }

        for (let i = this.minFactor; i <= this.maxFactor; i++) {
            for (let j = i; j <= this.maxFactor; j++) {
                const product = i * j
                if (!((smallest.value === null || product <= smallest.value) && isPalindrome(product))) {
                    continue;
                }

                if (smallest.value === null || product < smallest.value) {
                    smallest.value = product
                    smallest.factors = [
                        [i, j]
                    ]
                } else if (product === smallest.value) {
                    smallest.factors.push([i, j])
                }
            }
        }

        return smallest
    }

    get largest() {
        const largest = { value: null, factors: [] }

        for (let i = this.maxFactor; i >= this.minFactor; i--) {
            for (let j = this.maxFactor; j >= i; j--) {
                const product = i * j
                if (!((largest.value === null || product >= largest.value) && isPalindrome(product))) {
                    continue;
                }

                if (largest.value === null || product > largest.value) {
                    largest.value = product
                    largest.factors = [
                        [i, j]
                    ]
                } else if (product === largest.value) {
                    largest.factors.push([i, j])
                }
            }
        }

        return largest
    }
}

function isPalindrome(n) {
    return String(n) === [...String(n)].reverse().join('')
}