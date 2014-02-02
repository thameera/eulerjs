var assert = require('assert'),
    utils = require('../utils');

describe('Utils', function() {
  describe('divides', function() {
    var div = utils.divides;
    it('should simply do what it is supposed to do', function() {
      assert.ok(div(105, 7));
      assert.ok(div(0, 3));
      assert.ok(div(5, 5));
      assert.ok(!div(1001, 3));
      assert.ok(!div(1, 2));
    });
  });

  describe('dividesAny', function() {
    var diva = utils.dividesAny;
    it('should return true if any of the elems divide', function() {
      assert.ok(diva(36, [4, 9]));
      assert.ok(diva(500, [2, 4, 7]));
    });
    it('should return false if none of the elems divide', function() {
      assert.ok(!diva(81, [7]));
      assert.ok(!diva(500, [11, 16, 9]));
    });
    it('should return false if the array is empty', function() {
      assert.ok(!diva(36, []));
    });
  });

  describe('primeFactors', function() {
    var pf = utils.primeFactors;
    it('should give the prime factors correctly', function() {
      assert.deepEqual([2, 2, 3], pf(12));
      assert.deepEqual([43], pf(43));
      assert.deepEqual([], pf(1));
    });
  });

  describe('primesUnder', function() {
    var pu = utils.primesUnder;
    it('should give the correct primes under any integer', function() {
      assert.deepEqual([2, 3, 5, 7], pu(10));
      assert.equal(95, pu(500).length);
    });
    it('should not return the passed number in the array', function() {
      assert.deepEqual([2, 3], pu(5));
    });
    it('should return an empty array for numbers <= 2', function() {
      assert.deepEqual([], pu(2));
      assert.deepEqual([], pu(0));
    });
  });

  describe('isPrime', function() {
    var ip = utils.isPrime;
    it('should return true for primes', function() {
      assert.ok(ip(2));
      assert.ok(ip(3));
      assert.ok(ip(47));
    });
    it('should return false for non-primes', function() {
      assert.ok(!ip(4));
      assert.ok(!ip(111));
    });
    it('should return false for integers < 2', function() {
      assert(!ip(1));
      assert(!ip(0));
    });
  });

  describe('primeAfter', function() {
    var pa = utils.primeAfter;
    it('should return the first prime after n', function() {
      assert.equal(2, pa(1));
      assert.equal(3, pa(2));
      assert.equal(43, pa(41));
      assert.equal(43, pa(42));
      assert.equal(479, pa(470));
    });
  });

  describe('arraySum', function() {
    var as = utils.arraySum;
    it('should calculate the array sum', function() {
      assert.equal(10, as([2, 3, 5]));
      assert.equal(0, as([0, 0]));
    });
  });

  describe('arrayProd', function() {
    var ap = utils.arrayProd;
    it('should calculate the array sum', function() {
      assert.equal(30, ap([2, 3, 5]));
      assert.equal(0, ap([7, 0]));
    });
  });

  describe('divisors', function() {
    var div = utils.divisors;
    it('should calculate the array sum', function() {
      assert.deepEqual([1, 2, 4, 7, 14, 28], div(28));
      assert.equal(9, div(100).length);
    });
  });
});

