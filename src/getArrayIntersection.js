/**
 * Returns the intersection of 2 integer arrays.
 * @param {Number[]} arr1 An array of integers
 * @param {Number[]} arr2 An array of integers
 * @returns An array with the common elements, else an empty array.
 */
function findIntersection(arr1, arr2) {
  let resultArr;
  if (arr1.length >= arr2.length) {
    resultArr = arr1.filter((num) => arr2.includes(num));
  } else {
    resultArr = arr2.filter((num) => arr1.includes(num));
  }

  return Array.from(new Set(resultArr));
}

module.exports = findIntersection;
