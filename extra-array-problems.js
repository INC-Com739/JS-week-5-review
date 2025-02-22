'use strict'
// Arrays Exercises
let products = ['Apple', 'Banana', 'Cherry'];
// Exercise #1: Create an array of three product names.
console.log(products.length);
console.log(products);
// Exercise #2: Add a new product to the end of the array.
console.log(products.push('Date'));
console.log(products);
// Exercise #3: Remove the last product from the array.
console.log(products.pop());
console.log(products);
// Exercise #4: Find the index of a specific product in the array.
console.log(products.indexOf('Banana'));
console.log(products.indexOf('Cherry'));
console.log(products.indexOf('Date'));
console.log(products.indexOf('Apple'));
console.log(products);
// Exercise #5: Create a function that returns the first product in an array.
console.log(products[0]);
console.log(products);

// Exercise #6: Write a function that joins all product names into a single comma-separated string.
console.log(products.join(',')); // Apple,Banana,Cherry
console.log(products);