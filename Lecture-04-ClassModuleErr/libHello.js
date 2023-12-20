// Libhello.js
const person = {
    name: 'bump',
    weight: 116
}

function sayHello() {
    console.log("Hello js!");
}

function cube(x) {
    return x * x * x;
}

const add = (a, b) => a + b;

const Status = true;

module.exports = { person, sayHello, cube, add, Status }