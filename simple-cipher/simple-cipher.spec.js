import { describe, expect, test } from "@jest/globals";
import { Cipher } from "./simple-cipher";

describe("Random key cipher", () => {
  const cipher = new Cipher();

  test("can encode", () => {
    // Here we take advantage of the fact that plaintext of "aaa..."
    // outputs the key. This is a critical problem with shift ciphers, some
    // characters will always output the key verbatim.
    expect(cipher.encode("aaaaaaaaaa")).toEqual(cipher.key.substring(0, 10));
  });

  test("can decode", () => {
    expect(cipher.decode(cipher.key.substring(0, 10))).toEqual("aaaaaaaaaa");
  });

  test("is reversible", () => {
    // I.e., if you apply decode in a encoded result, you must see
    // the same plaintext encode parameter as a result of the decode method
    const plaintext = "abcdefghij";
    expect(cipher.decode(cipher.encode(plaintext))).toEqual(plaintext);
  });

  test("key is made only of lowercase letters", () => {
    expect(cipher.key).toMatch(/^[a-z]+$/);
  });
});

describe("Substitution cipher", () => {
  const key = "abcdefghij";
  const cipher = new Cipher(key);

  test("can encode", () => {
    expect(cipher.encode("aaaaaaaaaa")).toEqual("abcdefghij");
  });

  test("can decode", () => {
    expect(cipher.decode("abcdefghij")).toEqual("aaaaaaaaaa");
  });

  test("is reversible", () => {
    // I.e., if you apply decode in a encoded result, you must see
    // the same plaintext encode parameter as a result of the decode method
    expect(cipher.decode(cipher.encode("abcdefghij"))).toEqual("abcdefghij");
  });

  test("can double shift encode", () => {
    expect(new Cipher("iamapandabear").encode("iamapandabear")).toEqual(
      "qayaeaagaciai"
    );
  });

  test("can wrap on encode", () => {
    expect(cipher.encode("zzzzzzzzzz")).toEqual("zabcdefghi");
  });

  test("can wrap on decode", () => {
    expect(cipher.decode("zabcdefghi")).toEqual("zzzzzzzzzz");
  });

  test("can encode messages longer than the key", () => {
    expect(new Cipher("abc").encode("iamapandabear")).toEqual("iboaqcnecbfcr");
  });

  test("can decode messages longer than the key", () => {
    expect(new Cipher("abc").decode("iboaqcnecbfcr")).toEqual("iamapandabear");
  });
});
