//  ----------------- 1 Function Declaration -----------------
function greet1(name) {
  console.log(`Hello ${name}`);
}

// ----------------- 2 Function Expression -----------------

const greet2 = function (name) {
  console.log(`Hello ${name}`);
};

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

const pow2 = (num) => num ** 2;

// console.log(pow2(5));

// ----------------- 5 function Parametr ------------------

const sum = (a = 1, b = 2) => a + b;

// console.log(sum());


const sumAll = (...all) => {
  let result = 0;
  for (let num of all) {
    result += num;
  }
  console.log(result);
};

sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// ----------------- 6 function Closure ------------------

function createMember(name) {
    return function (lastName) {
        console.log(name + lastName);
    };
    }

const logWithLastName = createMember("Farid ");
console.log(logWithLastName("Kamalov"));
console.log(logWithLastName("Kamalov2"));