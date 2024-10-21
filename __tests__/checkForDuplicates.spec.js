const containsDuplicates = require("../src/checkForDuplicates");

describe("Input: ", () => {
  it("integer array with no duplicates -> returns false", () => {
    const arr = [2, 3, 4, 5];
    expect(containsDuplicates(arr)).toBe(false);
  });

  it("integer array with 1 duplicate -> returns true", () => {
    const arr = [45, 6, 38, 22, 38];
    expect(containsDuplicates(arr)).toBe(true);
  });

  it("integer array with multiple duplicates -> returns true", () => {
    const arr = [10, 11, 11, 5, 43, 101, 5, 43];
    expect(containsDuplicates(arr)).toBe(true);
  });

  it("integer array with zeros -> returns true", () => {
    const arr = [0, 0, 0, 0];
    expect(containsDuplicates(arr)).toBe(true);
  });

  it("empty array -> returns false", () => {
    const arr = [];
    expect(containsDuplicates(arr)).toBe(false);
  });

  it("null arr -> throws TypeError", () => {
    const arr = null;
    expect(() => containsDuplicates(arr).toThrow(TypeError));
  });
});
