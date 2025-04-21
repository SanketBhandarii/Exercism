export class InvalidInputError extends Error {
    constructor(message: string) {
      super()
      this.message = message || 'Invalid Input'
    }
  }
  
  type Direction = 'north' | 'east' | 'south' | 'west'
  type Coordinates = [number, number]
  
  const directions: Direction[] = ['north', 'east', 'south', 'west']
  
  export class Robot {
    private _bearing: Direction = 'north'
    private _coordinates: Coordinates = [0, 0]
  
    get bearing(): Direction {
      return this._bearing
    }
  
    get coordinates(): Coordinates {
      return this._coordinates
    }
  
    place({ x, y, direction }: { x: number; y: number; direction: string }) {
      if (!directions.includes(direction as Direction)) {
        throw new InvalidInputError(`Invalid direction: ${direction}`)
      }
      this._coordinates = [x, y]
      this._bearing = direction as Direction
    }
  
    turnRight() {
      const currentIndex = directions.indexOf(this._bearing)
      this._bearing = directions[(currentIndex + 1) % 4]
    }
  
    turnLeft() {
      const currentIndex = directions.indexOf(this._bearing)
      this._bearing = directions[(currentIndex + 3) % 4]
    }
  
    advance() {
      let [x, y] = this._coordinates
      switch (this._bearing) {
        case 'north':
          y += 1
          break
        case 'south':
          y -= 1
          break
        case 'east':
          x += 1
          break
        case 'west':
          x -= 1
          break
      }
      this._coordinates = [x, y]
    }
  
    evaluate(instructions: string) {
      for (const char of instructions) {
        switch (char) {
          case 'L':
            this.turnLeft()
            break
          case 'R':
            this.turnRight()
            break
          case 'A':
            this.advance()
            break
          default:
            throw new InvalidInputError(`Invalid instruction: ${char}`)
        }
      }
    }
  }
  