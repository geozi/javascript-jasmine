/**
 * Checks if there are any duplicate numbers in
 * the array.
 * @param {Number[]} numbers An array of integers
 * @returns True if there are duplicate, false otherwise.
 */
function containsDuplicates(numbers) {
  const uniqueNumSet = new Set();

  for (let num of numbers) {
    uniqueNumSet.add(num);
  }

  return numbers.length !== uniqueNumSet.size;
}

module.exports = containsDuplicates;
