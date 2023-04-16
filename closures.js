// function urlGenerator(domain) {
//   return function (url) {
//     `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator("com");
// const ruUrl = urlGenerator("ru");

// console.log(comUrl("google"));
// console.log(comUrl("netflix"));

// function bind(context, fn) {
//   return function (...args) {
//     fn.apply(context, args);
//   };
// }

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = { name: "Mikhail", age: 22, job: "Frontend" };
// const person2 = { name: "Elena", age: 19, job: "SMM" };

// bind(person1, logPerson)();
// bind(person2, logPerson)();

// function Hello(name) {
//   const mesaage = `Hello ${name}`;

//   return function () {
//     console.log(mesaage);
//   };
// }

// const helloFarid = Hello("Farid");
// helloFarid();

// function createFrameworkManager() {
//   const fw = ["Angular", "React"];

//   return {
//     print: function () {
//       console.log(fw.join(" "));
//     },
//     add: function (framework) {
//       fw.push(framework);
//     },
//   };
// }

// const manager = createFrameworkManager();

// // console.log(manager);
// manager.print()
// manager.add('VueJS')
// manager.print()

// const fib = [1, 2, 3, 5, 8, 13];

// for (let i = 0; i < fib.length; i++) {
//   setTimeout(function () {
//     console.log(`fib[${i}] = ${fib[i]}`);
//   }, 1500);
// }

// for (let i = 0; i < fib.length; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(`fib[${j}] = ${fib[j]}`);
//     }, 1500);
//   })(i);
// }
