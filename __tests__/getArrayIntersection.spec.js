const findIntersection = require("../src/getArrayIntersection");

describe("Input: ", () => {
  // Same length pairs

  it("pair of same length integer arrays with an intersection -> returns true", () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [4, 5, 6, 7, 8];
    expect(findIntersection(arr1, arr2)).toEqual([4, 5]);
  });

  it("pair of same length integer arrays with no intersection -> returns true", () => {
    const arr1 = [9, 10, 11, 12];
    const arr2 = [13, 14, 15, 16];
    expect(findIntersection(arr1, arr2)).toEqual([]);
  });

  // Longer first array

  it("pair with a longer first array and an intersection -> returns true", () => {
    const arr1 = [1, 2, 3, 4, 5, 6, 7];
    const arr2 = [5, 6, 8, 9];
    expect(findIntersection(arr1, arr2)).toEqual([5, 6]);
  });

  it("pair with a longer first array and no intersection -> returns true", () => {
    const arr1 = [10, 11, 12, 13, 14, 15];
    const arr2 = [16, 17, 18, 19];
    expect(findIntersection(arr1, arr2)).toEqual([]);
  });

  // Longer second array

  it("pair with a longer second array and an intersection -> returns true", () => {
    const arr1 = [2, 4, 6];
    const arr2 = [1, 2, 3, 4, 5, 6];
    expect(findIntersection(arr1, arr2)).toEqual([2, 4, 6]);
  });

  it("pair with a longer second array and no intersection -> returns true", () => {
    const arr1 = [7, 8, 9];
    const arr2 = [10, 11, 12, 13, 14, 15];
    expect(findIntersection(arr1, arr2)).toEqual([]);
  });

  // Empty arrays

  it("pair with an empty first array -> returns true", () => {
    const arr1 = [];
    const arr2 = [1, 2, 3];
    expect(findIntersection(arr1, arr2)).toEqual([]);
  });

  it("pair with an empty second array -> returns true ", () => {
    const arr1 = [34, 5, 21];
    const arr2 = [];
    expect(findIntersection(arr1, arr2)).toEqual([]);
  });

  it("pair of empty arrays -> returns true", () => {
    const arr1 = [];
    const arr2 = [];
    expect(findIntersection(arr1, arr2)).toEqual([]);
  });

  // Null arrays

  it("pair with first array as null -> throws TypeError", () => {
    const arr1 = null;
    const arr2 = [2, 34, 5];
    expect(() => findIntersection(arr1, arr2).toThrow(TypeError));
  });

  it("pair with second array as null -> throws TypeError", () => {
    const arr1 = [3, 4, 18];
    const arr2 = null;
    expect(() => findIntersection(arr1, arr2).toThrow(TypeError));
  });

  it("pair with both arrays as null -> throws TypeError", () => {
    const arr1 = null;
    const arr2 = null;
    expect(() => findIntersection(arr1, arr2).toThrow(TypeError));
  });
});
