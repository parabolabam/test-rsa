import {isCoprime} from './isCoprime';

export function getOpenExponent(eiler : number) : number {
  for (let e = 2; e < Infinity; e++) {
    if(isCoprime(e,eiler)) {
      return e;
    }
    continue;
  }

  throw new Error('error in getOpenExponent()');
}
