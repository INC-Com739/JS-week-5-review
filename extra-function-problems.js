'use strict'

// Functions Exercises

// Exercise #1: Write a function named `greet` that prints a generic greeting message to the console.
// Call the function to test it.
function greet() {
    console.log('Hello!');
}
greet();
console.log('Hello!');

// Exercise #2: Write a function named `greetCustomer` that prompts the user for their name and prints a personalized greeting to the console.
// Call the function to test it.
function greetCustomer() {
    let name = prompt('What is your name?');
    console.log(`Hello ${name}!`);
}
greetCustomer();
console.log('Alice');


// Exercise #3: Write a function named `productAvailable` that prompts the user for a product name and prints a message stating its availability.
// Call the function to test it.
function productAvailable() {
    let product = prompt('Enter a product name:');
    console.log(`${product} is available!`);
}
productAvailable();
console.log('Apple');
console.log('Banana');
console.log('Cherry');

// Exercise #4: Write a function named `addNumbers` that takes two numbers as parameters, adds them, and prints the result.
// Call the function with example numbers.
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
addNumbers(5, 10);
console.log(5, 10);

// Exercise #5: Write a function named `calculateTotal` that takes a product price and quantity as parameters.
// Multiply them together and print the total price.
// Call the function with example values.
function calculateTotal(price, quantity) {
    console.log(price * quantity);
}
calculateTotal(5, 10);
console.log(5, 10);

// Exercise #6: Write a function named `hasProduct` that takes an array of product names and prompts the user for a product name.
// Check if the product exists in the array and print true or false.
// Call the function with an example array.
function hasProduct(products) {
    let product = prompt('Enter a product name:');
    console.log(products.includes(product));
}
hasProduct(['Apple', 'Banana', 'Cherry']);
console.log('Apple', 'Banana', 'Cherry');

// Exercise #7: Write a function named `getWelcomeMessage` that prompts the user for their name and returns a welcome message as a string.
// Store the returned message in a variable and print it.
function getWelcomeMessage() {
    let name = prompt('What is your name?');
    return `Welcome ${name}!`;
}
let welcomeMessage = getWelcomeMessage();
console.log(welcomeMessage);

// Exercise #8: Write a function named `toUpperCase` that prompts the user for a string and returns it in uppercase.
// Store the returned string in a variable and print it.
function toUpperCase() {
    let str = prompt('Enter a string:');
    return str.toUpperCase();
}
let upperCaseStr = toUpperCase();
console.log(upperCaseStr);

// Exercise #9: Write a function named `formatProductInfo` that prompts the user for a product name and price.
function formatProductInfo() {
    let productName = prompt('Enter the product name:');
    let productPrice = prompt('Enter the product price:');
    return `Product: ${productName}, Price: $${productPrice}`;
}
let productInfo = formatProductInfo();
console.log(productInfo);
// Return a formatted string displaying the product information.
// Store the returned string in a variable and print it.

