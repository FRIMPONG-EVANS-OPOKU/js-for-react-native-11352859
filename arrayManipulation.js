// arrayManipulation.js

function processArray(numbers) {
  return numbers.map((number) => {
    if (number % 2 === 0) {
      return number * number;
    } else {
      return number * 3;
    }
  });
}

// Example usage
const numbers = [2, 3, 4, 5, 6];
const result = processArray(numbers);
console.log(result);
