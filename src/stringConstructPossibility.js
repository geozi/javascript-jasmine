/**
 * Checks the frequency of a letter in a
 * string.
 * @param {String} l
 * @param {String} s
 * @returns The frequency of the letter
 */
let countFreq = function (l, s) {
  s = s.split("");
  return s.filter((el) => el === l).length;
};

/**
 * Checks if a string can be constructed from the
 * characters of another string.
 * @param {String} source A String
 * @param {String} target A String
 * @returns True if the target string can be constructed from the source string, false otherwise.
 */
function canConstruct(source, target) {
  let uniqueCharSet = new Set();

  for (let ch of target) {
    uniqueCharSet.add(ch);
  }

  for (let ch of uniqueCharSet) {
    if (!source.includes(ch) || countFreq(ch, target) > countFreq(ch, source)) {
      return false;
    }
  }

  return true;
}

module.exports = canConstruct;
