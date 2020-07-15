import reverse from './reverseString';

test('It reverses the string', () => {
  expect(reverse.reverseString('abc')).toBe('cba');
});
