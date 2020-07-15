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

export default { caesarCipher };