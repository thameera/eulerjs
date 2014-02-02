module.exports = function(_, math, utils) {
  console.log('Problem: Lattice paths');
  console.time('time');

  var n = 20, range = _.range(0, n+1), range2 = _.range(1, n+1);
  var a = [];

  range.forEach(function(i) {a[i] = [1]; a[0][i] = 1;});

  range2.forEach(function(i) {
    range2.forEach(function(j) {
      a[i][j] = a[i-1][j] + a[i][j-1];
    });
  });

  console.timeEnd('time');
  console.log('Solution: ' + a[n][n]);
};

