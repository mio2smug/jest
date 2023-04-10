const Calculator = require("./calculator");

describe("Calculator basic operations", () => {

  let calculator;

  beforeEach(function () {
    calculator = new Calculator();
  });

  test("addition", () => {
    expect(calculator.add(5, -2)).toEqual(3);
  });

  test("Subtract", () => {
    expect(calculator.subtract(-4, -4)).toEqual(0);
  });
  test("Divide", () => {
    expect(calculator.divide(3, 5)).toBeCloseTo(0.6);
  });
  test("Multiply", () => {
    expect(calculator.multiply(10, 7)).toEqual(70);
  });
});