// "use strict";
// function a(){
//     b()
// }

// function b(){
//     c()
// }

// function c(){
//     console.log("return c");
// }
// debugger;
// a()

// const time = performance.now();
// console.log(time);

// setTimeout(() => {
//     const time = performance.now();
//     console.log(time);
// }
// , 0);

// document.getElementById("clicker").addEventListener("click", () => {
//   console.log("clicked");
// });

// setTimeout(() => {
//   for (let i = 0; i < 1000; i++) {
//     console.log("hello");
//   }
// }, 5000);
// function createParagraph() {
//   let para = document.createElement('p');
//   para.textContent = 'You clicked the button!';
//   document.body.appendChild(para);
// }

// const buttons = document.querySelectorAll('button');

// for(let i = 0; i < buttons.length ; i++) {
//   buttons[i].addEventListener('click', createParagraph);
// }

// debugger
// function x() {
//   y = 1; // возбудит ReferenceError в "строгом режиме"
//   var z = 2;
// }

// x();

// console.log(y); // выведет "1"
// console.log(z);var a;
// var a;
// console.log(a);                // Выведет "undefined" или "", в зависимости от браузера.
// console.log('still going...')

// debugger
// var bla
// bla=2

// bla = 2
// var bla
// console.log(bla)

// debugger
// var x = y, y = 'A';
// console.log(x + y); // undefinedA

// var a = 1;
// var b = "sala,"
// var z= 2;

// const c = a + b+z;
// console.log(typeof c);

// var foo = ["one", "two", "three"];

// // без деструктурирования
// var one   = foo[0];
// var two   = foo[1];
// var three = foo[2];
// console.log(one);
// console.log(two);
// console.log(three);

// с деструктурированием
// var [one, two, three] = foo;

// function f() {
//   return [1, 2];
// }

// console.log(f());

// const btn = document.querySelector('button');
// const p = document.querySelector('p');

// btn.addEventListener("click", updateBtn);

// function updateBtn() {
//   if (btn.textContent === "Start") {
//     btn.textContent = "Stop";
//     p.textContent = "Stop";
//   } else {
//     btn.textContent = "Start";
//     p.textContent = "Start";
//   }
// }

// function sanitise(x) {
//   if (isNaN(x)) {
//     console.log("not a number");
//   } else {

//     console.log("number");
//   }
// }

// console.log(sanitise(10));
// Expected output: "1"

// console.log(sanitise("NotANumber"));
// Expected output: NaN

// // let a = boolean;
// typeof instance === "boolean"
// console.log(typeof instance);

// let x = (() => { return 1})()
// console.log(x);

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const Car = class {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   Mau() {
//     console.log(`salam  ${this.name} `);
//   }
// };

// const mur = new Car("Ferid", 10);
// mur.Mau()

// class Rectangle {
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }
  
//     get area() {
//       return this.calcArea();
//     }
  
//     calcArea() {
//       return this.height * this.width;
//     }
//   }
  
//   const square = new Rectangle(10, 10);
  
//   console.log(square.area); // 100




// class StaticMethodCall {
//     static staticMethod() {
//       return 'Вызван статический метод';
//     }
//     static anotherStaticMethod() {
//       return this.staticMethod() + ' из другого статического метода';
//     }
//   }
//   StaticMethodCall.staticMethod();
//   // 'Вызван статический метод'
  
//   StaticMethodCall.anotherStaticMethod();
//   // 'Вызван статический метод из другого статического метода'



// class Book{
//     static Genre(){
//         return "Fantasy"
//     }

//     static Drama(){
//         return  this.Genre() + " is Drama"
//     }
    
// }

// console.log(Book.Drama());