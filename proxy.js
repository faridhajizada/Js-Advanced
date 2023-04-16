console.log("Hello world");

const person = {
  name: "John",
  age: 30,
    job: "Frontend",
};

const op = new Proxy(person, {
  get(target, prop) {
  console.log(`Getting prop ${prop}`);
    // console.log("Target:",target);
    // console.log("Prop:",prop);
    return target[prop];
  },
});

console.log(op);
// console.log(op.name);