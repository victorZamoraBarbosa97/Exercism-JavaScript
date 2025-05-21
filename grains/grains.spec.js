import { describe, expect, test } from "@jest/globals";
import { square, total } from "./grains";

describe("Grains", () => {
  describe("returns the number of grains on the square", () => {
    test("grains on square 1", () => {
      expect(square(1).toString()).toEqual("1");
    });

    test("grains on square 2", () => {
      expect(square(2).toString()).toEqual("2");
    });

    test("grains on square 3", () => {
      expect(square(3).toString()).toEqual("4");
    });

    test("grains on square 4", () => {
      expect(square(4).toString()).toEqual("8");
    });

    test("grains on square 16", () => {
      expect(square(16).toString()).toEqual("32768");
    });

    test("grains on square 32", () => {
      expect(square(32).toString()).toEqual("2147483648");
    });

    test("grains on square 64", () => {
      expect(square(64).toString()).toEqual("9223372036854775808");
    });

    test("square 0 raises an exception", () => {
      expect(() => square(0)).toThrow(
        new Error("square must be between 1 and 64")
      );
    });

    test("negative square raises an exception", () => {
      expect(() => square(-1)).toThrow(
        new Error("square must be between 1 and 64")
      );
    });

    test("square greater than 64 raises an exception", () => {
      expect(() => square(65)).toThrow(
        new Error("square must be between 1 and 64")
      );
    });
  });

  test("returns the total number of grains on the board", () => {
    expect(total().toString()).toEqual("18446744073709551615");
  });
});
