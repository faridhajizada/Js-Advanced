import { it, expect } from "vitest";

type StuffUnions = string | number | boolean;

const makeSomeStuff = (value: StuffUnions) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "boolean") {
    return value ? 1 : 0;
  }

  return value.toFixed(2);
};

it("should return a string", () => {
  expect(makeSomeStuff("hello")).toBe("HELLO");
});

it("should return a number", () => {
  expect(makeSomeStuff(10)).toBe("10.00");
});

it("should return 1 if is  true and 0 if nput isfalse", () => {
  expect(makeSomeStuff(true)).toBe(1);
});
