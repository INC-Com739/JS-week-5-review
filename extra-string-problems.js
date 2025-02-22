'use strict'
// Strings Exercises

// Exercise #1: Create a string variable that holds a customer's full name.
let fullName = 'Alice Smith';
console.log(fullName);

// Exercise #2: Convert a product name string to uppercase.
let productName = 'Apple';
console.log(productName.toUpperCase());

// Exercise #3: Convert a product description string to lowercase.
let productDescription = 'Fresh Apples';
console.log(productDescription.toLowerCase());

// Exercise #4: Find the length of a customer's email address.
let email = '';
console.log(email.length);

// Exercise #5: Find the first occurrence of a specific letter in a product name.
let letter = 'p';
console.log(productName.indexOf(letter));

// Exercise #6: Replace a word in a product description with another word.
let newDescription = productDescription.replace('Apples', 'Bananas');
console.log(newDescription);

// Exercise #7: Check if a product name contains a specific keyword.
let keyword = 'apple';
console.log(productName.toLowerCase().includes(keyword));

// Exercise #8: Join an array of product categories into a single string.
let categories = ['Fruit', 'Produce', 'Organic'];
console.log(categories.join(', '));

// Exercise #9: Remove extra spaces from a promotional message.
let message = '    Sale on Apples!    ';
console.log(message.trim());

// Template Literals Exercises

// Exercise #1: Use template literals to create a product listing sentence.
let product = 'Apple';
let price = 1.00;
console.log(`The ${product} costs $${price}.`);

// Exercise #2: Insert a product price inside a template literal.
product = 'Banana';
price = 0.50;
console.log(`The ${product} costs $${price}.`);

// Exercise #3: Use a template literal to generate a personalized greeting message for a customer.
let customer
 = 'Alice';
console.log(`Hello ${customer}!`);

