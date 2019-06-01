import * as color from 'ansi-colors';

import {
  randomPrimeNumber,
  getModular,
  calculateEilerFunc,
  getOpenExponent,
  getClosedExponent
} from './utils';
import {decrypt} from './decrypt';
import {encrypt} from './encrypt';

function init(message : string = 'test message') {
  const p = randomPrimeNumber(); // choice prime
  const q = randomPrimeNumber(); // choice prime
  const n = getModular(p,q);
  const eiler = calculateEilerFunc(p,q);
  const openExponent = getOpenExponent(eiler);
  const closedExponent = getClosedExponent(openExponent, eiler); // choice

  console.log(color.red(`Gotta be encrypted: ${message}`));

  const encrypted = encrypt(message,openExponent,n);

  console.log(color.green(`encrypted '${encrypted}'`));

  const decrypted = decrypt(encrypted,closedExponent,n);

  console.log(color.yellow(`decrypted '${decrypted}'`));

}
init(process.argv[2]);
