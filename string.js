const name = 'John ';
const age = 30;

// Concatenation
const hello = "My name is " + name + " and I am " + age;
console.log(hello);

const helloNew = `My name is ${name} and I am ${age>20 ? "Loxsan": age}`

console.log(helloNew);


console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.substring(0, 3));
console.log(name.substring(0, 4).toUpperCase());
// console.log(name.split(''));

// console.log(name.repeat(2));
