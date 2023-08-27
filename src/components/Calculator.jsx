//Exercise 6 - Some Parts were imported/transformed into JSX from the previous Calculator App

import React, { useState } from 'react';

function Calculator() {
  const [currentInput, setCurrentInput] = useState('');

  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => (b === 0 ? 'Infinity' : a / b);
  const squareRoot = (a) => Math.sqrt(a);
  const square = (a) => a * a;

  const Display = (value) => {
    if (currentInput.length < 14) {
      setCurrentInput(`${currentInput}${value}`);
    }
  };

  const clearDisplay = () => {
    setCurrentInput('');
  };

  const backspace = () => {
    setCurrentInput(currentInput.slice(0, -1));
  };

  const calculate = () => {
    try {

        if (currentInput.includes('√')) {
            const num = parseFloat(currentInput.replace('√', ''));
            const result = squareRoot(num);
            setCurrentInput(result.toString());
            return;
        }

        if (currentInput.includes('x²')) {
            const num = parseFloat(currentInput.replace('x²', ''));
            const result = square(num);
            setCurrentInput(result.toString());
            return;
        }

        const match = currentInput.match(/([\d.]+)\s*([\+\-\*\/√^])\s*([\d.]+)/);
        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);
        let result;
        

        switch (operator) {
            case '+':
            result = add(num1, num2);
            break;
            case '-':
            result = subtract(num1, num2);
            break;
            case '*':
            result = multiply(num1, num2);
            break;
            case '/':
            result = divide(num1, num2);
            break;
            case '√':
            result = squareRoot(num1);
            break;
            case '^':
            result = square(num1);
            break;
            default:
            throw new Error('Invalid operator');
        }
        
        setCurrentInput(result.toString());
        } catch (error) {
        setCurrentInput('Error');
        }
    };

    return (
        <div className="calculator">
        <input type="text" id="display" readOnly value={currentInput} />
        <div className="buttons">
            <button onClick={() => Display('√')}> √ </button>
            <button onClick={() => Display('x²')}> x² </button>
            <button id="clear" onClick={backspace}> DEL </button>
            <button id="clear" onClick={clearDisplay}> C </button>
            <button onClick={() => Display('1')}>1</button>
            <button onClick={() => Display('2')}>2</button>
            <button onClick={() => Display('3')}>3</button>
            <button id="op" onClick={() => Display('+')}>+</button>
            <button onClick={() => Display('4')}>4</button>
            <button onClick={() => Display('5')}>5</button>
            <button onClick={() => Display('6')}>6</button>
            <button id="op" onClick={() => Display('-')}>-</button>
            <button onClick={() => Display('7')}>7</button>
            <button onClick={() => Display('8')}>8</button>
            <button onClick={() => Display('9')}>9</button>
            <button id="op" onClick={() => Display('*')}>x</button>
            <button onClick={() => Display('.')}>.</button>
            <button onClick={() => Display('0')}>0</button>
            <button onClick={calculate}>=</button>
            <button id="op" onClick={() => Display('/')}>÷</button>
        </div>
        </div>
  );
}

export default Calculator;
