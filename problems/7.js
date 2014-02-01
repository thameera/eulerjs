module.exports = function(_, math, utils) {
  console.log('Problem: 10001st prime');

  var primes = [], p = 0;

  while (primes.length < 10001) {
    p = utils.primeAfter(p, primes);
    primes.push(p);
  }
  
  console.log('Solution: ' + p);
};

