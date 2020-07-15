import capitalizeString from './capitalizeString';

test('The first letter of the string in uppercase', () => {
  expect(capitalizeString.capitalizeString('hello')).toBe('Hello');
});