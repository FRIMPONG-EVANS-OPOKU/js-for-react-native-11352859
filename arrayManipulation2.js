// arrayManipulation.js

function formatArrayStrings(strings, numbers) {
  return strings.map((string, index) => {
    if (numbers[index] % 2 === 0) {
      return string.toUpperCase();
    } else {
      return string.toLowerCase();
    }
  });
}

// Example usage
const strings = ["HEY", "World", "EVANS"];
const numbers = [1, 2, 3];
const result = formatArrayStrings(strings, numbers);
console.log(result);
