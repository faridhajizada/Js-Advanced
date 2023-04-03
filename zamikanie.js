function urlGenerator(domain) {
  return function (url) {
    `https://${url}.${domain}`;
  };
}

const comUrl = urlGenerator("com");
const ruUrl = urlGenerator("ru");

// console.log(comUrl("google"));
// console.log(comUrl("netflix"));

function bind(context, fn) {
  return function (...args) {
    fn.apply(context, args);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Mikhail", age: 22, job: "Frontend" };
const person2 = { name: "Elena", age: 19, job: "SMM" };

bind(person1, logPerson)();
bind(person2, logPerson)();
