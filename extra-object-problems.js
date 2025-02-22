'use strict'
// Objects Exercises

// Exercise #1: Create an object representing a product with properties name, price, and category.
let product = {
    name: 'Apple',
    price: 1.00,
    category: 'Fruit'
};
console.log(product);
// Exercise #2: Add a new property 'stock' to the product object.
product.stock = 10;
console.log(product);
// Exercise #3: Update the price of the product object.
product.price = 1.50;
console.log(product);
// Exercise #4: Remove the 'category' property from the product object.
delete product.category;
console.log(product);
// Exercise #5: Write a function that takes a product object and prints all its keys.
function printKeys(product) {
    console.log(Object.keys(product));
}
printKeys(product);
// Exercise #6: Write a function that takes a product object and prints all its values.
function printValues(product) {
    console.log(Object.values(product));
}
printValues(product);
// Exercise #7: Create a nested object representing a customer with name, address, and order history.
let customer
= {
    name: 'Alice',
    address: {
        street: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        zip: '62701'
    },
    orderHistory: [
        { name: 'Apple', price: 1.00, quantity: 5 },
        { name: 'Banana', price: 0.50, quantity: 10 }
    ]
};
console.log(customer);

// Exercise #8: Access a nested property inside the customer object.
let city = customer.address.city;
console.log(city);
let order = customer.orderHistory[0];
console.log(order);
console.log(customer.orderHistory[0].name);
console.log(customer.orderHistory[0].price);
console.log(customer.orderHistory[0].quantity);
console.log(customer.orderHistory[1].name);
console.log(customer.orderHistory[1].price);
console.log(customer.orderHistory[1].quantity);
console.log(customer);
// Exercise #9: Write a function that calculates the total cost of an order given a product object and a quantity.
function calculateTotal(product, quantity) {
    return product.price * quantity;
}
console.log(calculateTotal(product, 5));
console.log(calculateTotal(product, 10));
console.log(product, 5);
console.log(product, 10);
.
