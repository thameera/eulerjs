module.exports = function() {
  console.log('Problem: Largest prime factor');
  
  var n = 600851475143, top = 0, x = 2;
  while (n > 1) {
    if (n % x === 0) {
      if (x > top) top = x;
      n /= x;
    }
    x++;
  }

  console.log('Solution: ' + top);
};

