module.exports = function(_) {
  console.log('Problem: Even Fibonacci numbers');

  var i = 1, j = 1, cur = 1, tot = 0;

  while (cur < 4000000) {
    if (cur % 2 === 0) tot += cur;
    cur = i + j;
    i = j;
    j = cur;
  }

  console.log('Solution: ' + tot);
};

