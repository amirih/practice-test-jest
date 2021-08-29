export function testWorks(str) {
  return str;
}

export function positiveNumber(number) {
  if (number < 0) {
    return -1 * number;
  } else {
    return number;
  }
}

export function isPrimeNumber(number) {
  let i = Math.round(Math.sqrt(number));

  if (number <= 1) {
    return false;
  }

  while (i > 1) {
    if (number % i === 0) {
      return false;
    }
    i--;
  }

  return true;
}
