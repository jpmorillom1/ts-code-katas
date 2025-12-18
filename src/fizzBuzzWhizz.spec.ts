import { game } from "./fizzBuzzWhizz";

describe("FizzBuzz Game", () => {
  test("should works", () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
  test("should works", () => {
    const result = game(4);
    expect(result).toEqual(4);
  });
  test("should works", () => {
    const result = game(2);
    expect(result).toEqual("Whizz");
  });
  test("should works", () => {
    const result = game(3);
    expect(result).toEqual("FizzWhizz");
  });
  test("should works", () => {
    const result = game(5);
    expect(result).toEqual("BuzzWhizz");
  });
  test("should works", () => {
    const result = game(6);
    expect(result).toEqual("Fizz");
  });

  test("should works", () => {
    const result = game(15);
    expect(result).toEqual("FizzBuzz");
  });
  test("should works", () => {
    const result = game(107);
    expect(result).toEqual("Whizz");
  });
});
