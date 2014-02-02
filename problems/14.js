module.exports = function(_, math, utils) {
  console.log('Problem: Longest Collatz sequence');
  console.time('time');

  var cache = [0, 1], maxlen = 0, longest;

  var len = function(n) {
    if (!cache[n]) {
      var m = n;
      if (m % 2 === 0) m /= 2;
      else m = 3*m + 1;
      cache[n] = len(m) + 1;
    }
    return cache[n];
  };

  _.each(_.range(1, 1000000), function(i) {
    var l = len(i);
    if (l > maxlen) {
      maxlen = l;
      longest = i;
    }
  });

  console.timeEnd('time');
  console.log('Solution: ' + longest);
};

