import { describe, expect, test } from "vitest";
import validateEnum from "../validateEnum.js";

describe("validateEnum function", () => {
  test("Valid value", () => {
    const statusOptions = ["pending", "approved", "rejected"];
    const isValid = validateEnum("approved", statusOptions);
    expect(isValid).toBe(true);
  });

  test("Invalid value", () => {
    const statusOptions = ["pending", "approved", "rejected"];
    const isValid = validateEnum("in progress", statusOptions);
    expect(isValid).toBe(false);
  });

  test("Empty enumOptions", () => {
    const isValid = validateEnum("approved", []);
    expect(isValid).toBe(false);
  });
});
