"use strict";
// const arr = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const arr = ["Alex", "Bob", "Alice", "Bob", "Tom", "Bob", "Alice", "Alex"];
function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(arr));
// const set = new Set(arr);

// set.add("Ivan").add("Vasya").add("Alex");
// console.log(set);

// set.delete('Alex');
//set.clear();
//set.size;
//set.has('Alex');

//for (let value of set )console.log(value);

// set.forEach((value, valueAgain, set) => {
//   console.log(value, valueAgain);
// });

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

//  console.log(unique(arr));
