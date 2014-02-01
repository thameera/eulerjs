module.exports = function(_, math) {
  console.log('Problem: Smallest multiple');

  var sol = math.pow(2, 4) * math.pow(3, 2) * 5 * 7 * 11 * 13 * 17 * 19;

  console.log('Solution: ' + sol);
};

