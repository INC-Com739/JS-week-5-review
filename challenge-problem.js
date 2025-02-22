// Challenge Exercise: Build a Simple E-Commerce Checkout System
'use strict'
// Write a function named `checkout` that does the following:
// 1. Prompts the user for their name and displays a welcome message.
function checkout() {
    let name = prompt('What is your name?');
    console.log(`Welcome ${name}!`);
    // 2. Prompts the user to enter a product name and its price.
    let productName = prompt('Enter the product name:');
    let productPrice = prompt('Enter the product price:');
    // 3. Prompts the user to enter the quantity they want to purchase.
    let quantity = prompt('Enter the quantity:');
    // 4. Calculates the total cost and displays a summary of their purchase.
    let totalCost = productPrice * quantity;
    console.log(`You purchased ${quantity} ${productName}(s) for $${totalCost}.`);
}