module.exports = function(_, math, utils) {
  console.log('Problem: Summation of primes');
  console.time('time');

  var sol = utils.arraySum(utils.primesUnder(2000000));

  console.timeEnd('time');
  console.log('Solution: ' + sol);
};

