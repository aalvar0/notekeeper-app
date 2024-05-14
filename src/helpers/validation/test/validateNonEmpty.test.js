import { expect, test } from "vitest";
import validateNonEmpty from "../validateNonEmpty.js";

test("validateNonEmpty should return true for a non-empty string", () => {
  const nonEmptyString = "This is a non-empty string";
  expect(validateNonEmpty(nonEmptyString)).toBe(true);
});

test("validateNonEmpty should return false for an empty string", () => {
  const emptyString = "";
  expect(validateNonEmpty(emptyString)).toBe(false);
});

test("validateNonEmpty should return false for a non-string value", () => {
  const nonStringValue = 123;
  expect(validateNonEmpty(nonStringValue)).toBe(false);
});
