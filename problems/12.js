module.exports = function(_, math, utils) {
  console.log('Problem: Highly divisible triangular number');
  console.time('time');

  var n = 1, i = 1;

  do {
    n += ++i;
  } while (utils.divisors(n).length <= 500);

  console.timeEnd('time');
  console.log('Solution: ' + n);
};

