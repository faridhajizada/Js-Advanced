// //  ----------------- 1 Function Declaration -----------------
// function greet1(name) {
//   console.log(`Hello ${name}`);
// }

// // ----------------- 2 Function Expression -----------------

// const greet2 = function (name) {
//   console.log(`Hello ${name}`);
// };

// ----------------- 3 Anonymous function -----------------

// let counter = 0;
// const interval = setInterval(function() {
//     if(counter === 5) {
//         clearInterval(interval)
//     }else{
//         console.log(++counter);
//     }

// }, 100);

// greet1("Farid1");
// greet2("Farid2");

// console.dir(greet1);
// console.dir(greet2);

// ----------------- 4 Arrow function ------------------

// const pow2 = (num) => num ** 2;

// // console.log(pow2(5));

// // ----------------- 5 function Parametr ------------------

// const sum = (a = 1, b = 2) => a + b;

// console.log(sum());

// const sumAll = (...all) => {
//   let result = 0;
//   for (let num of all) {
//     result += num;
//   }
//   console.log(result);
// };

// sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// ----------------- 6 function Closure ------------------

// function createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName);
//     };
//     }

// const logWithLastName = createMember("Farid ");
// console.log(logWithLastName("Kamalov"));
// console.log(logWithLastName("Kamalov2"));

// let x =  [31,2,8];
// console.log(x.sort());

// ------------------------------------------------------------

// const btn = document.querySelector("button");

// btn.onclick = function () {
//   alert("Salam");
// }

// var myArray = ['Я', 'люблю', 'шоколадных', 'лягушек'];
// // var madeAString = myArray.join(' ');
// // Вернёт 'Я люблю шоколадных лягушек'
// // console.log(madeAString);
// var madeAString = myArray.join(' ');
// console.log(madeAString);

// const x = "declared outside function";

// exampleFunction();

// function exampleFunction() {
//   console.log("Inside function");
//   console.log(x);
// }

// console.log("Outside function");
// console.log(x);

// const x = 1;

// function a() {
//   const y = 2;
// }

// function b() {
//   const z = 3;
// }

// function output(value) {
//   const para = document.createElement('p');
//   document.body.appendChild(para);
//   para.textContent = `Value: ${value}`;
// }

// console.log(output(y));

// var num1 = 2;
// var num2 = 3;

// function numbers() {
//   let c = num1 + num2;
//   return c;
// }

// console.log(c); // 2
// const x = 1;

// function a() {
//   const y = 2;
// }

// function b() {
//   const z = 3;
// }

// function a() {
//   var y = 2;
//   output(y);
// }

// function b() {
//   var z = 3;
//   output(z);
// }
// function a() {
//   var y = 2;
//   output(z);
// }

// function b() {
//   var z = 3;
//   output(y);
// }

// function output(value) {
//   const para = document.createElement("p");
//   document.body.appendChild(para);
//   para.textContent = `Value: ${value}`;
// }

// a();
// b();

// function myBigFunction() {
//   var myValue = 1;

//   subFunction1(myValue);
//   subFunction2(myValue);
//   subFunction3(myValue);
// }

// function subFunction1(value) {
//   console.log(value);
// }

// function subFunction2(value) {
//   console.log(value);
// }

// function subFunction3(value) {
//   console.log(value);
// }

// subFunction1(2);
// myBigFunction();

// function displayMessage(msgText, msgType) {
//   var html = document.querySelector("html");

//   var panel = document.createElement("div");
//   panel.setAttribute("class", "msgBox");
//   html.appendChild(panel);

//   var msg = document.createElement("p");
//   msg.textContent = msgText;
//   panel.appendChild(msg);

//   var closeBtn = document.createElement("button");
//   closeBtn.textContent = "x";
//   panel.appendChild(closeBtn);

//   closeBtn.onclick = function () {
//     panel.parentNode.removeChild(panel);
//   };
// }
// // displayMessage();

// var btn = document.querySelector("button");

// btn.onclick = function() {
//   displayMessage('Woo, this is a different message!');
// };

// var myText = "I am a string";
// var newString = myText.replace("string", "sausage");
// console.log(newString);

const input = document.querySelector('.numberInput');
const para = document.querySelector('p');


function squared(num) {
  return num * num;
}

function cubed(num) {
  return num * num * num;
}

function factorial(num) {
  var x = num;
  while (x > 1) {
    num *= x-1;
    x--;
  }
  return num;
}

// 5=5
// 5*4=20
// 20*3=60
// 60=120


input.onchange = function() {
  var num = input.value;
  if (isNaN(num)) {
    para.textContent = 'You need to enter a number!';
  } else {
    para.textContent = num + ' squared is ' + squared(num) + '. ' +
                       num + ' cubed is ' + cubed(num) + '. ' +
                       num + ' factorial is ' + factorial(num) + '.';
  }
}