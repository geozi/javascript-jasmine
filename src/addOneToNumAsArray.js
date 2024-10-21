/**
 * Receives an array of integers representing
 * a number, adds 1 to the least significant digit,
 * and returns it back to the caller.
 * @param {Number[]} digits An array of integers
 * @returns An array of integers, with one or more integers augmented by 1.
 */
function addOne(digits) {
  let n = digits.length;

  if (n === 1) {
    if (digits[0] !== 9) {
      ++digits[0];
    } else {
      digits = [1, 0];
    }
  } else if (n > 1) {
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        ++digits[i];
        break;
      }
    }

    let count = 0;
    for (let digit of digits) {
      if (digit === 0) {
        ++count;
      }
    }

    if (digits.length === count) {
      return [1].concat(digits);
    } else {
      return digits;
    }
  }
  return digits;
}

module.exports = addOne;
