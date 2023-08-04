// var findDifference = function (nums1, nums2) {
//   const set1 = new Set(nums1);
//   const set2 = new Set(nums2);
//   const notInNums2 = Array.from(set1).filter((num) => !set2.has(num));
//   const notInNums1 = Array.from(set2).filter((num) => !set1.has(num));
//   return [notInNums2, notInNums1];
// };

// console.log(findDifference([1, 2, 3, 4, 5], [1, 2, 3, 4]));var findDifference = function (nums1, nums2) {

//   async function sleep(millis) {
//     await new Promise(res=>setTimeout(res,millis))
//  }

//  //sleep leetcode

//  function createCounter(n) {
//   let counter = n;

//   function increment() {
//     return counter++;
//   }
//   return increment

// }
// const counter = createCounter(10);
// console.log(counter()); // output: 6
// console.log(counter()); // output: 7
// console.log(counter()); // output: 8

// }

// function signFunc(x) {
//   if (x > 0) {
//     return 1;
//   } else if (x < 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// }

// function arraySign(nums) {
//   let product = 1;
//   for (let i = 0; i < nums.length; i++) {
//     product *= nums[i];
//   }
//   return signFunc(product);
// }

// const arr = [4, 5, 3, 111, 2, 1];

// const sortedArr = [...arr].sort((a, b) => a - b);

// console.log("arr", arr);
// console.log("sortedArr", sortedArr);

// Leetcode 2724. Sort By
// function sortBy(arr: any[], fn: Function): any[] {
//   return arr.sort((a,b) => fn(a) - fn(b))
// };
