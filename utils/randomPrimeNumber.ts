import {isPrimeNumber} from './isPrimeNumber';

export function randomPrimeNumber() : number {
  let randomPrime = parseInt((Math.random() * 100 + 1) + '', 10);

  if(!isPrimeNumber(randomPrime)) {
    return randomPrimeNumber();
  }

  return randomPrime;
};
