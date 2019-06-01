export function encrypt(message : string, openExponent : number,n : number) : string {
  const encrypted : string[] = [];

  message = message.toUpperCase();

  message.split('')
    .map((char : string) => {
      if(char === ' ') {
        char = '_';
      }

      return char.charCodeAt(0) - 64;
    })
    .forEach((char : number) => {
      const pow = Math.pow(char, openExponent); // m^e
      const mod = pow % n; // mod n

      encrypted.push(String.fromCharCode(mod));
    });

  return encrypted.join('');
}
