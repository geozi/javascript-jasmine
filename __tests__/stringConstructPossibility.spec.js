const canConstruct = require("../src/stringConstructPossibility");

describe("Input: ", () => {
  // Difference in length, longer s.

  it("letter only strings, longer s -> returns true", () => {
    let s = "aab";
    let t = "aa";
    expect(canConstruct(s, t)).toBe(true);
  });

  it("number only strings, longer s  -> returns true", () => {
    let s = "01234567";
    let t = "246";
    expect(canConstruct(s, t)).toBe(true);
  });

  it("mixed strings, longer s  -> returns true", () => {
    let s = "random123";
    let t = "r3";
    expect(canConstruct(s, t)).toBe(true);
  });

  it("letter only strings, longer s  -> returns false", () => {
    let s = "hello";
    let t = "bye";
    expect(canConstruct(s, t)).toBe(false);
  });

  it("number only strings, longer s  -> returns false", () => {
    let s = "0123456";
    let t = "9";
    expect(canConstruct(s, t)).toBe(false);
  });

  it("mixed strings, longer s  -> returns false", () => {
    let s = "random21";
    let t = "r4";
    expect(canConstruct(s, t)).toBe(false);
  });

  it("whites spaces only strings, longer s -> returns true", () => {
    let s = "  ";
    let t = " ";
    expect(canConstruct(s, t)).toBe(true);
  });

  // Same lengths.

  it("letter only strings, same lengths -> returns true", () => {
    let s = "hello";
    let t = "hello";
    expect(canConstruct(s, t)).toBe(true);
  });

  it("number only strings, same lengths -> returns true", () => {
    let s = "123";
    let t = "123";
    expect(canConstruct(s, t)).toBe(true);
  });

  it("mixed strings, same lengths -> returns true", () => {
    let s = "random1";
    let t = "random1";
    expect(canConstruct(s, t)).toBe(true);
  });

  it("letter only strings, same lengths -> returns false", () => {
    let s = "join";
    let t = "coin";
    expect(canConstruct(s, t)).toBe(false);
  });

  it("number only strings, same lengths -> returns false", () => {
    let s = "01234";
    let t = "11234";
    expect(canConstruct(s, t)).toBe(false);
  });

  it("mixed strings, same lengths -> returns false", () => {
    let s = "random123";
    let t = "random233";
    expect(canConstruct(s, t)).toBe(false);
  });

  it("white spaces only strings, same lengths -> returns true", () => {
    let s = "  ";
    let t = "  ";
    expect(canConstruct(s, t)).toBe(true);
  });

  // Difference in length, longer t.

  it("letter only strings, longer t -> returns false", () => {
    let s = "apple";
    let t = "apples";
    expect(canConstruct(s, t)).toBe(false);
  });

  it("number only strings, longer t -> returns false", () => {
    let s = "01234";
    let t = "012345";
    expect(canConstruct(s, t)).toBe(false);
  });

  it("mixed strings, longer t -> returns false", () => {
    let s = "random12";
    let t = "random123";
    expect(canConstruct(s, t)).toBe(false);
  });

  it("white spaces only strings, longer t -> returns false", () => {
    let s = "   ";
    let t = "    ";
    expect(canConstruct(s, t)).toBe(false);
  });

  // Null values

  it("s as a null -> throws TypeError", () => {
    let s = null;
    let t = "hello";
    expect(() => canConstruct(s, t).toThrow(TypeError));
  });

  it("t as a null value -> throws TypeError", () => {
    let s = "bye";
    let t = null;
    expect(() => canConstruct(s, t).toThrow(TypeError));
  });

  it("both s and t as null values -> throws TypeError", () => {
    let s = null;
    let t = null;
    expect(() => canConstruct(s, t).toThrow(TypeError));
  });
});
