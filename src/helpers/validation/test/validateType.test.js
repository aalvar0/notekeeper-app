import { expect, test } from "vitest";
import validateType from "../validateType.js";

test("validateType function should return true for a valid note object", () => {
  const validNote = {
    name: "as",
    description: "as",
    important: true,
    status: "pending",
    due_date: "1212-12-12",
  };

  expect(validateType(validNote)).toBe(true);
});

test("validateType function should return false for an invalid note object", () => {
  const invalidNote = {
    name: "as",
    description: "as",
    important: "string",
    status: "pending",
    due_date: "1212-12-12",
  };

  expect(validateType(invalidNote)).toBe(false);
});
