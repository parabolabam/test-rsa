export function isCoprime(first : number, second : number) : boolean {
  let num;

  while (second) {
    num = first % second;
    first = second;
    second = num;
  }
  if (Math.abs(first) === 1) {
    return true;
  }

  return false;
}
