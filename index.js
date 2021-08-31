export function testWorks(str) {
  return str;
}

export function makeItPositive(number) {
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

export function findString(part, whole) {
  if (whole.includes(part)) return true;
  else return false;
}

export function timeConsumingOperation(data) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 100);
    if (!data) reject("error");
  });
  return promise;
}
