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

//412. Fizz Buzz

// var fizzBuzz = function(n) {
//   const output = [];

//   for (let i = 1; i <= n; i++){
//       let string = ''
//       if (i % 3 === 0) string += 'Fizz'
//       if (i % 5 === 0) string += 'Buzz'
//       if (string === '') string += i

//       output.push(string)
//   }

//   return output;
// };

//1. Two Sum

// const nums = [1, 2, 3, 0, 5, 4, 11, 6, 7, 8, 9];
// const target = 5;

// const twoSum = function (nums, target) {
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         if (result.length > 0) {
//           result.push([i, j]);
//         } else {
//           result.push(i, j);
//         }
//       }
//     }
//   }
//   return result;
// };

// console.log(twoSum(nums, target));

// const nums = [1, 2, 3, 0, 5, 4, 11, 6, 3, 7, 8, 9];
// const target = 6;

// const twoSum = function (nums, target) {
//   const sortNums = [...nums].sort((a, b) => a - b);
//   let left = 0;
//   let right = sortNums.length - 1;

//   while (right > left) {
//     const sum = sortNums[left] + sortNums[right];
//     if (sum === target) {
//         const index1 = nums.indexOf(sortNums[left]);
//         const index2 = nums.lastIndexOf(sortNums[right]);
//         return [index1, index2];
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return [-1, -1];
// };

// console.log(twoSum(nums, target));

///linearySeacrh

// const arr = [1, 4, 8, 5, 3, 2, 7, 6, 9, 10];

// function linearySeacrh(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearySeacrh(arr, 8));

const arr = [2, 5, 8, 9, 13, 45, 67, 99, 100, 101, 102, 103, 104, 105, 106];

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === num) {
      return mid; // Искомый элемент найден, возвращаем его индекс
    } else if (arr[mid] < num) {
      left = mid + 1; // Искомый элемент может быть в правой половине
    } else {
      right = mid - 1; // Искомый элемент может быть в левой половине
    }
  }
  return -1;
}

console.log(binarySearch(arr, 8));
