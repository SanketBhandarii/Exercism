export const answer = (question: string): number => {
    const words = question.replace('?', '').toLowerCase().split(' ');
    if (!(words[0] === 'what' && words[1] === 'is')) {
      throw new Error('Unknown operation');
    }
  
    const operations: { [key: string]: string } = {
      plus: '+',
      minus: '-',
      multiplied: '*',
      divided: '/',
    };
  
    let numbers: number[] = [];
    let operators: string[] = [];
  
    let lastWasNumber = false;
    let lastWasOperator = false;
  
    for (let i = 2; i < words.length; i++) {
      const word = words[i];
      if (!isNaN(parseFloat(word))) {
        if (lastWasNumber) {
          throw new Error('Syntax error');
        }
        numbers.push(parseFloat(word));
        lastWasNumber = true;
        lastWasOperator = false;
      }
      else if (operations[word]) {
        if (lastWasOperator) {
          throw new Error('Syntax error');
        }
        operators.push(operations[word]);
        lastWasOperator = true;
        lastWasNumber = false;
      }
      else if (['by'].includes(word)) {
        continue;
      }
      else {
        throw new Error('Unknown operation');
      }
    }
  
    if (lastWasOperator || numbers.length === 0 || operators.length >= numbers.length) {
      throw new Error('Syntax error'); 
    }
  
    
    let result = numbers[0];
  
    
    for (let i = 0; i < operators.length; i++) {
      const operator = operators[i];
      const nextNumber = numbers[i + 1];
  
      switch (operator) {
        case '+':
          result += nextNumber;
          break;
        case '-':
          result -= nextNumber;
          break;
        case '*':
          result *= nextNumber;
          break;
        case '/':
          result = Math.floor(result / nextNumber); 
          break;
        default:
          throw new Error('Unknown operation');
      }
    }
  
    return result;
  };