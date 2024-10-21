const add = require("../src/addOneToNumAsArray");

describe("Input: ", () => {
  it("3469 as an integer array -> returns true", () => {
    const arr = [3, 4, 6, 9];
    expect(add(arr)).toEqual([3, 4, 7, 0]);
  });

  it("8999 as an integer array -> returns true", () => {
    const arr = [8, 9, 9, 9];
    expect(add(arr)).toEqual([9, 0, 0, 0]);
  });

  it("9999 as an integer array -> returns true", () => {
    const arr = [9, 9, 9, 9];
    expect(add(arr)).toEqual([1, 0, 0, 0, 0]);
  });

  it("234 as an integer array -> returns true", () => {
    const arr = [2, 3, 4];
    expect(add(arr)).toEqual([2, 3, 5]);
  });

  it("1000 as an integer array -> returns true", () => {
    const arr = [1, 0, 0, 0];
    expect(add(arr)).toEqual([1, 0, 0, 1]);
  });

  it("0 as an integer array -> returns true", () => {
    const arr = [0];
    expect(add(arr)).toEqual([1]);
  });

  it("9 as an integer array -> returns true", () => {
    const arr = [9];
    expect(add(arr)).toEqual([1, 0]);
  });

  it("empty integer array -> returns true", () => {
    const arr = new Array();
    expect(add(arr).length).toEqual(0);
    expect(add(arr)).toEqual([]);
  });

  it("null array -> throws TypeError", () => {
    const arr = null;
    expect(() => add(arr).toThrow(TypeError));
  });
});
