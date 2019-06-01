export function getClosedExponent(openExponent : number, eiler : number) : number {
  for(let d = 0; d < Infinity; d++) {
    if((d * openExponent) % eiler === 1) {
      return d;
    }
  }
  throw new Error('Error in getClosedExponent()');
}
