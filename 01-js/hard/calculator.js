/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error('Division by zero');
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    if (expression === '') {
      return;
    }

    const expressionArray = expression.match(/(\d+\.?\d*|\+|\-|\*|\/|\(|\))/g);

    if (!expressionArray || expressionArray.some(token => isNaN(token) && !['+', '-', '*', '/', '(', ')'].includes(token))) {
      throw new Error('Invalid expression');
    }

    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => {
        if (b === 0) throw new Error('Division by zero');
        return a / b;
      }
    };

    const stack = [];
    const output = [];

    for (let i = 0; i < expressionArray.length; i++) {
      const token = expressionArray[i];

      if (!isNaN(token)) {
        // If the token is a number, push it to the output stack
        output.push(Number(token));
      } else if (token === '(') {
        stack.push(token);
      } else if (token === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          output.push(stack.pop());
        }
        if (stack.length === 0 || stack.pop() !== '(') {
          throw new Error('Invalid expression: mismatched parentheses');
        }
      } else if (operators.hasOwnProperty(token)) {
        // Handle operators based on precedence
        while (
          stack.length > 0 &&
          operators.hasOwnProperty(stack[stack.length - 1]) &&
          operators[token] <= operators[stack[stack.length - 1]]
        ) {
          output.push(stack.pop());
        }
        stack.push(token);
      }
    }

    while (stack.length > 0) {
      if (stack[stack.length - 1] === '(' || stack[stack.length - 1] === ')') {
        throw new Error('Invalid expression: mismatched parentheses');
      }
      output.push(stack.pop());
    }

    // Evaluate the expression using a stack
    const evalStack = [];
    for (let i = 0; i < output.length; i++) {
      const token = output[i];
      if (!isNaN(token)) {
        evalStack.push(token);
      } else if (operators.hasOwnProperty(token)) {
        const operand2 = evalStack.pop();
        const operand1 = evalStack.pop();
        const result = operators[token](operand1, operand2);
        evalStack.push(result);
      }
    }

    if (evalStack.length !== 1) {
      throw new Error('Invalid expression');
    }

    this.result = evalStack[0];
    return this.result;
  }
}

module.exports = Calculator;
