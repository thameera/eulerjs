var _ = require('lodash'),
    math = require('mathjs')();

/*
 * Returns whether a is divisible by b
 * @param {number} a, b
 */
var divides = function(a, b) {
  return a % b === 0;
};

/*
 * Returns whether n is divisible by any integer in arr
 * @param {number} n
 * @param {Array} arr An array of integers
 */
var dividesAny = function(n, arr) {
  return _.any(arr, function(i) {
    return divides(n, i);
  });
};

/*
 * Returns an array of prime factors of a given number
 * @param {number} n
 */
var primeFactors = function(n) {
  var factors = [], x = 2;
  while (n > 1) {
    while (n % x === 0) {
      factors.push(x);
      n /= x;
    }
    x++;
  }
  return factors;
};

/*
 * Returns an array of all primes under n
 * @param {number} n
 */
var primesUnder = function(n) {
  if (typeof n !== 'number' || n <= 2) return [];

  var a = [], primes = [2];

  _.each(_.range(3, n, 2), function(i) {
    if (a[i]) return;

    primes.push(i);
    _.each(_.range(i, n, i), function(j) {
      a[j] = 1;
    });
  });

  return primes;
};

/*
 * Returns whether n is a prime or not
 * @param {number} n
 * @param {Array} [primes] Optional array of primes
 */
var isPrime = function(n, primes) {
  if (n < 2) return false;
  primes = primes || primesUnder(math.ceil(n/2) + 1);
  return !dividesAny(n, primes);
};

/*
 * Returns the first prime after n
 * @param {number} n
 * @param {Array} [primes] Optional array of primes
 */
var primeAfter = function(n, primes) {
  if (n < 2) return 2;
  n = divides(n, 2) ? n + 1: n + 2;
  primes = primes || primesUnder(n);
  while (!isPrime(n, primes)) {
    n += 2;
  }
  return n;
};

/*
 * Returns the sum of numbers in the array
 * @param {Array} a
 */
var arraySum = function(a) {
  return _.reduce(a, function(sum, i) {
    return sum + i;
  });
};

/*
 * Returns the product of numbers in the array
 * @param {Array} a
 */
var arrayProd = function(a) {
  return _.reduce(a, function(prod, i) {
    return prod ? prod * i : i;
  });
};

module.exports = {
  'arrayProd': arrayProd,
  'arraySum': arraySum,
  'divides': divides,
  'dividesAny': dividesAny,
  'isPrime': isPrime,
  'primeAfter': primeAfter,
  'primeFactors': primeFactors,
  'primesUnder': primesUnder
};

