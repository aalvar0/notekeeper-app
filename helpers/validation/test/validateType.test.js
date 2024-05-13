import { expect, test } from "vitest";
import validateType from "../validateType.js";

test("validateType function should return true for a valid note object", () => {
  const validNote = {
    title: "Example Note",
    content: "This is an example note content.",
    priority: 1,
    isCompleted: false,
  };

  expect(validateType(validNote)).toBe(true);
});

test("validateType function should return false for an invalid note object", () => {
  const invalidNote = {
    title: "Example Note",
    content: "This is an example note content.",
    priority: "high",
    isCompleted: false,
  };

  expect(validateType(invalidNote)).toBe(false);
});
