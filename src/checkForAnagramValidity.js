/**
 * Checks if two strings are valid anagrams of
 * one another.
 * @param {String} s1 A string.
 * @param {String} s2 A string.
 * @returns True if the strings are anagrams of one another, false otherwise.
 */
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  } else {
    s1 = s1.split("").sort().join("");
    s2 = s2.split("").sort().join("");

    for (let i = 0; i < s1.length; i++) {
      if (s1.charAt(i) !== s2.charAt(i)) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isAnagram;
