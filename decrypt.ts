export function decrypt(encryptedMessage : string, closedExponent : number,n : number) : string {
  const decrypted : string[] = [];

  encryptedMessage.split('')
    .map((char : string) => char.charCodeAt(0))
    .forEach((char : number) => {
      let mod = 1;

      for (let i = 0; i < closedExponent; i++) {
        mod = (mod * char) % n;
      }

      let char_ = String.fromCharCode(mod + 64);

      if(char_ === '_') {
        char_ = ' ';
      }
      decrypted.push(char_);
    });

  return decrypted.join('').toLowerCase();
}

