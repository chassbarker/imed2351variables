// Global variable
var globalMessage = "Hello, this is a global variable!";

// Output global variable to the console
console.log(globalMessage); // Outputs: Hello, this is a global variable!

// Block variable
function displayBlockVariable() {
    let blockVariable = "This is a block-scoped variable."; // Block variable
    console.log(blockVariable); // Outputs: This is a block-scoped variable.
}

// Call the function to output the block variable
displayBlockVariable();

// Mathematical operations on variables
let num1 = 15;  // First number
let num2 = 7;   // Second number

let sum = num1 + num2;            // Addition
let difference = num1 - num2;     // Subtraction
let product = num1 * num2;        // Multiplication
let quotient = num1 / num2;       // Division
let remainder = num1 % num2;      // Modulus (remainder of division)

console.log("Sum: " + sum);               // Outputs: Sum: 22
console.log("Difference: " + difference); // Outputs: Difference: 8
console.log("Product: " + product);       // Outputs: Product: 105
console.log("Quotient: " + quotient);     // Outputs: Quotient: 2.142857142857143
console.log("Remainder: " + remainder);   // Outputs: Remainder: 1

// String variable
let favoriteQuote = "The journey of a thousand miles begins with one step."; // String variable

// Output string variable to the console
console.log(favoriteQuote); // Outputs: The journey of a thousand miles begins with one step.

// Object variable using const
const person = {
    name: "Chass",
    age: 43,
    city: "San Antonio",
    occupation: "Student"
};

// Output object variable to the console
console.log(person);
// Outputs: { name: 'Chass', age: 43, city: 'San Antonio', occupation: 'Student' }
