const addOne = require("../src/addOneToNumAsArray");

describe("Input: ", () => {
  it("3469 as an integer array -> returns true", () => {
    const arr = [3, 4, 6, 9];
    expect(addOne(arr)).toEqual([3, 4, 7, 0]);
  });

  it("8999 as an integer array -> returns true", () => {
    const arr = [8, 9, 9, 9];
    expect(addOne(arr)).toEqual([9, 0, 0, 0]);
  });

  it("9999 as an integer array -> returns true", () => {
    const arr = [9, 9, 9, 9];
    expect(addOne(arr)).toEqual([1, 0, 0, 0, 0]);
  });

  it("234 as an integer array -> returns true", () => {
    const arr = [2, 3, 4];
    expect(addOne(arr)).toEqual([2, 3, 5]);
  });

  it("1000 as an integer array -> returns true", () => {
    const arr = [1, 0, 0, 0];
    expect(addOne(arr)).toEqual([1, 0, 0, 1]);
  });

  it("0 as an integer array -> returns true", () => {
    const arr = [0];
    expect(addOne(arr)).toEqual([1]);
  });

  it("9 as an integer array -> returns true", () => {
    const arr = [9];
    expect(addOne(arr)).toEqual([1, 0]);
  });

  it("empty integer array -> returns true", () => {
    const arr = new Array();
    expect(addOne(arr).length).toEqual(0);
    expect(addOne(arr)).toEqual([]);
  });

  it("null array -> throws TypeError", () => {
    const arr = null;
    expect(() => addOne(arr).toThrow(TypeError));
  });
});
