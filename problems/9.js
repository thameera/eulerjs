module.exports = function(_, math, utils) {
  console.log('Problem: Special pythogorean triplet');

  var k;

  for (var i = 1; i < 334; i++) {
    for (var j = 1; j < 500; j++) {
      k = 1000 - i - j;
      if (math.square(i) + math.square(j) === math.square(k)) {
        console.log('Solution: ' + i * j * k);
        return;
      }
    }
  }

  console.log('No solution');
};

