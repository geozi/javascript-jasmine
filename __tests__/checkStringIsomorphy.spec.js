const isIsomorphic = require("../src/checkStringIsomorphy");

describe("Input: ", () => {
  it("character only strings -> returns true", () => {
    let s1 = "egg";
    let s2 = "add";
    expect(isIsomorphic(s1, s2)).toBe(true);
  });

  it("character only strings -> returns false", () => {
    let s1 = "hello";
    let s2 = "world";
    expect(isIsomorphic(s1, s2)).toBe(false);
  });

  it("number only strings -> returns true", () => {
    let s1 = "01234";
    let s2 = "03654";
    expect(isIsomorphic(s1, s2)).toBe(true);
  });

  it("number only strings -> returns false", () => {
    let s1 = "345613";
    let s2 = "012345";
    expect(isIsomorphic(s1, s2)).toBe(false);
  });

  it("mixed character strings -> returns true", () => {
    let s1 = "random12";
    let s2 = "mixed130";
    expect(isIsomorphic(s1, s2)).toBe(true);
  });

  it("mixed character strings -> returns false", () => {
    let s1 = "random12";
    let s2 = "mixed131";
    expect(isIsomorphic(s1, s2)).toBe(false);
  });

  it("white spaces only strings -> returns true", () => {
    let s1 = "   ";
    let s2 = "   ";
    expect(isIsomorphic(s1, s2)).toBe(true);
  });

  it("empty strings -> return true", () => {
    let s1 = "";
    let s2 = "";
    expect(isIsomorphic(s1, s2)).toBe(true);
  });

  it("strings with different lengths -> returns false", () => {
    let s1 = "apple";
    let s2 = "stories";
    expect(isIsomorphic(s1, s2)).toBe(false);
  });

  it("first string null -> throws TypeError", () => {
    let s1 = null;
    let s2 = "weather";
    expect(() => isIsomorphic(s1, s2).toThrow(TypeError));
  });

  it("second string null -> throws TypeError", () => {
    let s1 = "sun";
    let s2 = null;
    expect(() => isIsomorphic(s1, s2).toThrow(TypeError));
  });

  it("null strings -> throws TypeError", () => {
    let s1 = null;
    let s2 = null;
    expect(() => isIsomorphic(s1, s2).toThrow(TypeError));
  });
});
