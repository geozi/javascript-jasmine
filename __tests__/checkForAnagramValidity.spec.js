const anagram = require("../src/checkForAnagramValidity");

describe("Testing with the following inputs: ", () => {
  it("character only strings -> returns true", () => {
    let s1 = "cat";
    let s2 = "act";
    expect(anagram(s1, s2)).toBe(true);
  });

  it("number only strings -> returns true", () => {
    let s1 = "012345";
    let s2 = "513240";
    expect(anagram(s1, s2)).toBe(true);
  });

  it("mixed strings -> returns true", () => {
    let s1 = "random12";
    let s2 = "12random";
    expect(anagram(s1, s2)).toBe(true);
  });

  it("white spaces only -> returns true", () => {
    let s1 = "   ";
    let s2 = "   ";
    expect(anagram(s1, s2)).toBe(true);
  });

  it("empty strings -> returns true", () => {
    let s1 = "";
    let s2 = "";
    expect(anagram(s1, s2)).toBe(true);
  });

  it("character only strings -> returns false", () => {
    let s1 = "hello";
    let s2 = "world";
    expect(anagram(s1, s2)).toBe(false);
  });

  it("number only strings -> returns false", () => {
    let s1 = "012345";
    let s2 = "012346";
    expect(anagram(s1, s2)).toBe(false);
  });

  it("mixed strings -> returns false", () => {
    let s1 = "random12";
    let s2 = "random19";
    expect(anagram(s1, s2)).toBe(false);
  });

  it("strings with different lengths -> returns false", () => {
    let s1 = "orange";
    let s2 = "oranges";
    expect(anagram(s1, s2)).toBe(false);
  });

  it("first string null -> throws TypeError", () => {
    let s1 = null;
    let s2 = "orange";
    expect(() => anagram(s1, s2).toThrow(TypeError));
  });

  it("second string null - throws TypeError", () => {
    let s1 = "hello";
    let s2 = null;
    expect(() => anagram(s1, s2).toThrow(TypeError));
  });

  it("both strings null -> throws TypeError", () => {
    let s1 = null;
    let s2 = null;
    expect(() => anagram(s1, s2).toThrow(TypeError));
  });
});
