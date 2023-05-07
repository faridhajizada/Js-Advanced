var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const notInNums2 = Array.from(set1).filter((num) => !set2.has(num));
  const notInNums1 = Array.from(set2).filter((num) => !set1.has(num));
  return [notInNums2, notInNums1];
};

console.log(findDifference([1, 2, 3, 4, 5], [1, 2, 3, 4]));var findDifference = function (nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const notInNums2 = Array.from(set1).filter((num) => !set2.has(num));
    const notInNums1 = Array.from(set2).filter((num) => !set1.has(num));
    return [notInNums2, notInNums1];
  };
  
  console.log(findDifference([1, 2, 3, 4, 5], [1, 2, 3, 4]));