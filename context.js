// const person = {
//   surname: "Hacizade",
//   age: 30,

//   greet: function (what, name) {
//     console.log(`What:${what}  Name:${name} Surname:${this.surname}`);
//   },
// };

// person.greet("what", "Farid");

// const elnar = { surname: "Elnar" };

// person.greet.call(elnar, "what", "Farid");
// person.greet.apply(elnar, ["what", "Farid"]);
// person.greet.call(elnar, ...["what", "Farid"]);
// person.greet.bind(elnar, "what", "Farid")();
// const bound = person.greet.bind(elnar, "what", "Farid");
// bound();

function logThis() {
  console.log(this);
}

const obj = { num: 42 };
logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();
