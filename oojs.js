// function createNewPerson(name) {
//   const obj = {};
//   obj.name = name;
//   obj.greeting = function () {
//     alert("Hi! I'm " + this.name + ".");
//   };
//   return obj;
// }

// const salva = createNewPerson("Salva");
// console.log(salva.name);
// salva.greeting();

// function Person(name) {
//   this.name = name;
//   this.greeting = function () {
//     alert("Hi! I'm " + this.name + ".");
//   };
// }

// let person1 = new Person("Bob");
// let person2 = new Person("Sarah");

// person1.name
// person1.greeting()
// person2.name
// person2.greeting()


function Person(first, last, age, gender, interests) {
    this.name = {
      first : first,
      last: last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
      alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  };
  