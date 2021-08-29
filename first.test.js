import { test } from "@jest/globals";
import { testFirst, positiveNumber, isPrimeNumber } from "./index.js";
import { randomInt } from "crypto";

test("testing", () => {
  expect(testFirst("hello")).toBe("hello");
});

test("is positive", () => {
  const i = randomInt(0, 100000000000);
  expect(positiveNumber(i)).toBe(i);
  expect(positiveNumber(-1 * i)).toBe(i);
});

test("is prime", () => {
  const primes = [
    3, 5, 7, 5101, 7451, 7457, 7459, 7477, 7481, 7487, 7489, 7499, 7507, 7517,
    7523, 7529, 7537, 7541, 7547, 7549, 7559, 7561, 211, 257, 263, 373, 563,
    593, 607, 653, 733, 947, 977, 1103, 1123, 1187, 1223, 1367, 1511, 1747,
    1753, 1907, 2287, 2417, 2677, 2903, 2963, 3307, 3313, 3637, 3733, 4013,
    4409, 4457, 4597, 4657, 4691, 4993, 7, 47, 223, 3967, 16127, 1046527,
    16769023, 1073676287, 68718952447, 274876858367, 4398042316799,
    1125899839733759,
  ];
  const noPrimes = [
    0, 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28,
    30, 32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54,
    55, 56, 57, 58, 60, 62, 63,
  ];

  primes.map((prime) => expect(isPrimeNumber(prime)).toBe(true));
  noPrimes.map((noPrime) => expect(isPrimeNumber(noPrime)).toBe(false));
});
