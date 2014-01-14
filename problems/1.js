module.exports = function(_) {
  console.log('Problem: Multiples of 3 and 5');

  var sol = _.reduce(_.range(1000), function(sum, num) {
    return sum + (num % 3 && num % 5 ? 0 : num);
  });

  console.log('Solution: ' + sol );
};

