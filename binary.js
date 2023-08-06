console.log("Hello World");

const arr = [1, 4, 7, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45];

const BinarySearch = (arr, value) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.round((left + right) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (value > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};

console.log(BinarySearch(arr, 12));
