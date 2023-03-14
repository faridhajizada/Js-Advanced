// const car = ["Audi", "BMW", "Mercedes", "Volkswagen", "Porsche", "Ferrari"];
// const fib = [1, 2, 3, 5, 8, 13];

// console.log(car);

// car.push('Lada')
// console.log(car);

// const firstCar = car.shift()
// console.log(firstCar);

// const lastCar = car.pop()
// console.log(lastCar);

// console.log(car.reverse());

// console.log(car.indexOf('BMW'));

// console.log(car.includes('BMW'));

// console.log(car);

// const text = "Hello, we are learning JavaScript";

// console.log(text.split("").reverse().join(""));

// let x =[1,2,3,4]
// let [a,...b] = x.reverse()
// console.log(b);

// const people = [
//   { name: "Vladilen", budget: 4200 },
//   { name: "Elena", budget: 3500 },
//   { name: "Victoria", budget: 1700 },
// ];

// let findedPerson;
// for (let item of people) {
//   if (item.budget === 1700) {
//     findedPerson = item;
//   }
// }

// console.log(findedPerson);

// const person = people.find((p) => p.budget === 1700);

// console.log(person);

// const carsUpperCase = (i) => i.toUpperCase();
// const a = car.map(carsUpperCase);
// console.log(a);
// console.log(car);



// const allBudget = people.filter(p=>p.budget>2000).reduce((acc,person)=>{
//     acc += person.budget
//     return acc
// },5)

// console.log(allBudget);


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
debugger
array.forEach(element => {
    console.log(element);
});