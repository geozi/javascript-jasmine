/**
 * Checks if two strings are isomorphic.
 * @param {String} s A string
 * @param {String} t A string
 * @returns True if the strings are isomorphic, false otherwise.
 */
function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  } else {
    const mS = {};
    const mT = {};
    let chS;
    let chT;

    for (let i = 0; i < s.length; i++) {
      chS = s.charAt(i);
      chT = t.charAt(i);

      if (mS[chS] === undefined && mT[chT] === undefined) {
        mS[chS] = chT;
        mT[chT] = chS;
      } else if (mS[chS] !== chT || mT[chT] !== chS) {
        return false;
      }
    }
  }

  return true;
}

module.exports = isIsomorphic;
