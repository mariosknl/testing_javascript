import caesar from './caesarCipher';


test('wraps from z to a', () => {
  expect(caesar.caesarCipher(caesar.range('a'), 1)).toBe(`${caesar.range('b')}a`);
  expect(caesar.caesarCipher(caesar.range('a'), 3)).toBe(`${caesar.range('d')}abc`);
});