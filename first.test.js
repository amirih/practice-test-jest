import {
  testWorks,
  makeItPositive,
  isPrimeNumber,
  findString,
  timeConsumingOperation,
} from "./index.js";
import { randomBytes, randomInt } from "crypto";

const MAX = 100000000000;
const primes = [
  3, 5, 7, 5101, 7451, 7457, 7459, 7477, 7481, 7487, 7489, 7499, 7507, 7517,
  7523, 7529, 7537, 7541, 7547, 7549, 7559, 7561, 211, 257, 263, 373, 563, 593,
  607, 653, 733, 947, 977, 1103, 1123, 1187, 1223, 1367, 1511, 1747, 1753, 1907,
  2287, 2417, 2677, 2903, 2963, 3307, 3313, 3637, 3733, 4013, 4409, 4457, 4597,
  4657, 4691, 4993, 7, 47, 223, 3967, 16127, 1046527, 16769023, 1073676287,
  68718952447, 274876858367, 4398042316799, 1125899839733759,
];
const noPrimes = [
  0, 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30,
  32, 33, 34, 35, 36, 38, 39, 40, 42, 44, 45, 46, 48, 49, 50, 51, 52, 54, 55,
  56, 57, 58, 60, 62, 63,
];

test("Does first test work?", () => {
  const string = randomBytes(8).toString();
  expect(testWorks(string)).toBe(string);
});

test("make it positive", () => {
  const int = randomInt(0, MAX);
  const float = int * Math.random();
  expect(makeItPositive(int)).toBeGreaterThan(0);

  expect(makeItPositive(0)).toBe(0);
  expect(makeItPositive(int)).toBe(int);
  expect(makeItPositive(float)).toBeCloseTo(float);
  expect(makeItPositive(-1 * int)).toBe(int);
  expect(makeItPositive(-1 * float)).toBeCloseTo(float);
});

test("is prime", () => {
  primes.map((prime) => expect(isPrimeNumber(prime)).toBe(true));
  noPrimes.map((noPrime) => expect(isPrimeNumber(noPrime)).toBe(false));
});

test("mix to functions", () => {
  const negativePrimes = primes.map((prime) => {
    return -1 * prime;
  });
  negativePrimes.map((negativePrime) =>
    expect(isPrimeNumber(makeItPositive(negativePrime))).toBe(true)
  );

  const negativeNoPrimes = noPrimes.map((noPrime) => {
    return -1 * noPrime;
  });
  negativeNoPrimes.map((negativePrime) =>
    expect(isPrimeNumber(makeItPositive(negativePrime))).toBe(false)
  );
});

test("find string", () => {
  const inputString = randomBytes(32);
  const begin = randomInt(0, 28);
  const end = randomInt(begin, 34);
  const partialMatch = inputString.slice(begin, end);
  expect("sse").toMatch(/sse/);
  expect(findString(partialMatch, inputString)).toBeTruthy();
  expect(findString("", inputString)).toBeTruthy();

  expect(findString("partialMatch", inputString)).toBeFalsy();
});

test("async test", async () => {
  await expect(timeConsumingOperation("data")).resolves.toBe("data");
  await expect(timeConsumingOperation()).rejects.toMatch("error");
});

//copied from docs
beforeAll(() => console.log("1 - beforeAll"));
afterAll(() => console.log("1 - afterAll"));
beforeEach(() => console.log("1 - beforeEach"));
afterEach(() => console.log("1 - afterEach"));
test("", () => console.log("1 - test"));
describe("Scoped / Nested block", () => {
  beforeAll(() => console.log("2 - beforeAll"));
  afterAll(() => console.log("2 - afterAll"));
  beforeEach(() => console.log("2 - beforeEach"));
  afterEach(() => console.log("2 - afterEach"));
  test("", () => console.log("2 - test"));
});
