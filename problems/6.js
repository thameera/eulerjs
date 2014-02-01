module.exports = function(_, math) {
  console.log('Problem: Sum square difference');

  var range = _.range(1, 101);

  var sum = _.reduce(range, function(sum, n) {
    return sum + n;
  });

  var sumOfSq = _.reduce(range, function(sum, n) {
    return sum + math.square(n);
  });

  var sol = math.square(sum) - sumOfSq;

  console.log('Solution: ' + sol);
};

