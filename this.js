"use strict";

// function sayName (surname){
//     console.log(this)
//     console.log(this.name+ ' '+surname)
// }

// const user={
//     name:'John'
// }

// sayName.call(user,'Snow')
// sayName.apply(user,['Snow'])

// function count(num){
//     return this*num
// }

// const double=count.bind(2)
// console.log(double(3))

// const obj = {
//   num: 5,
//   sayNumber: function () {
//     const say = () => {
//       console.log(this.num);
//     };
//     say();
//   },
// };

// obj.sayNumber();

function hello (name){
    return 'hello '+ name + '!'
}


const message=console.log("dariofd");
// console.log(hello("salam"))