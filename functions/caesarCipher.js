const caesarCipher = (plaintext, key) => {
  let ciphertext = '';
  const re = /[a-z]/;
  for (let i = 0; i < plaintext.length; i += 1) {
    if (re.test(plaintext.charAt(i))) {
      ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + key) % 26 + 97);
    } else { ciphertext += plaintext.charAt(i); }
  }
  return ciphertext;
};

const range = (start) => {
  const result = [];
  const stop = 'z';
  const stop2 = stop.charCodeAt(0);

  for (let idx = start.charCodeAt(0); idx <= stop2; idx += 1) {
    result.push(String.fromCharCode(idx));
  }
  return result.join('');
};

export default { caesarCipher, range };