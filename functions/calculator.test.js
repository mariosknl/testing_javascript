import calculator from './calculator';

test('adds 2 numbers', () => {
  expect(calculator.calculator.add(2, 2)).toBe(4);
});

test('multiplies 2 numbers', () => {
  expect(calculator.calculator.multiply(2, 2)).toBe(4);
});

test('divide 2 numbers', () => {
  expect(calculator.calculator.divide(2, 2)).toBe(1);
});

test('subtrack 2 numbers', () => {
  expect(calculator.calculator.subtract(2, 2)).toBe(0);
});
