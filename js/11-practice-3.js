// Write an arrow function where it will do the following:
// a) Square each array element.
// b) Calculate the sum of the Square elements.
// c) Return the average of the sum of the Squared elements.
// Print the results.

// input: array function

const numbers = [2, 3, 4, 5];
// a) Square each array element.
const square = numbers.map(x => x * x);
console.log(square);

// b) Calculate the sum of the Square elements.
let sum = 0;
const getSum = square.forEach(x => {
    
})