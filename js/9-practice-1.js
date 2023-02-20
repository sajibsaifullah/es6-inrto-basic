// problem-1: Write an function that will take 3 parameters, will multiply the parameters and will return the result.

const numbers = (num1, num2, num3) => num1 * num2 * num3;

const result = numbers(3, 5, 2);
console.log(result);

// Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const threeLines = `
    I am a web developer.
    I love to code.
    I love to eat biryani.
`;
console.log(threeLines);

// Write an arrow function that will take 2 parameters: One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

const operation = (data1, data2 = 20) => data1 + data2;

const result1 = operation(5);
console.log(result1);