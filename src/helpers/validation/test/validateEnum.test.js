import { describe, expect, test } from "vitest";
import validateEnum from "../validateEnum.js";

describe("validateEnum function", () => {
  test("Valid value", () => {
    const isValid = validateEnum("approved");
    expect(isValid).toBe(false);
  });

  test("Invalid value", () => {
    const isValid = validateEnum("in_progress");
    expect(isValid).toBe(true);
  });
});
