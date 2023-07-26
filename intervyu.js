// var a = 5;

// function f() {
//   if (a) {

//     var a = 10;
//     console.log(a);
//   }
// }

// f();

// var b = 10;

// function f() {
//   if (b) {
//     console.log(b);
//     var b = 20;
//   }
// }

// f();

//---------------------------

// console.log(c);
// var c = 10;

// console.log(d);
// let d = 10;

// console.log(e);
// const e = 10;

//---------------------------

// let inc = (function () {
//   let counter = 1;

//   return function () {
//     return counter++;
//   };
// })();

// console.log(inc());
// console.log(inc());

//---------------------------

//Для сортировки массива по количеству повторений каждого элемента и создания нового массива
//с каждым уникальным элементом по одному разу, мы можем использовать reduce для подсчета повторений
// элементов и Object.values для преобразования уникальных значений в массив. Вот как это можно сделать:

// let words = ["banana", "limit", "limit", "orange", "banana", "limit"];

// // Подсчитываем повторения каждого элемента в массиве
// const mySuperSort = (array) => {
//   const wordCountMap = words.reduce((countMap, word) => {
//     countMap[word] = (countMap[word] || 0) + 1;
//     return countMap;
//   }, {});

//   // Получаем массив уникальных элементов из объекта с подсчитанными повторениями
//   const uniqueWords = Object.keys(wordCountMap);

//   return uniqueWords.sort((a, b) => wordCountMap[b] - wordCountMap[a]);
// };

// console.log(mySuperSort(words));

//Теперь массив uniqueWords содержит каждый уникальный элемент из исходного массива words по
//одному разу, отсортированный по количеству повторений.

//---------------------------

// multiplyByTwo(1, 2, 3, 4, 5, 6);

// function multiplyByTwo(...args) {
//   console.log(args);
//   console.log(args.map((el) => el * 2));
// }

//---------------------------
