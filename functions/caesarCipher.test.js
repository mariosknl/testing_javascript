import caesar from './caesarCipher';


test('test all the letter in the alphabet', () => {
  expect(caesar.caesarCipher(caesar.range('a'), 1)).toBe(`${caesar.range('b')}a`);
  expect(caesar.caesarCipher(caesar.range('a'), 3)).toBe(`${caesar.range('d')}abc`);
});

test('wrap of all letters, z to a', () => {
  expect(caesar.caesarCipher(caesar.range('a'), 26)).toBe(caesar.caesarCipher(caesar.range('a'), 0));
});

test('punctuation', () => {
  expect(caesar.caesarCipher('test, the. ponctuation? !', 5)).toBe('yjxy, ymj. utshyzfynts? !');
});