module.exports = function(_, math, utils) {
  console.log('Problem: Largest product in a grid');
  console.time('time');

  var fs = require('fs');

  var createArray = function(s) {
    var a = [];
    _.each(String.prototype.split.call(s, '\n'), function(line) {
      a.push(_.map(line.split(' '), function(c) {
        return +c;
      }));
    });
    return a.splice(0, 20);
  };

  var cb = function(data) {
    var a = createArray(data),
        range = _.range(0, 16),
        max = 0;

    _.each(range, function(i) {
      _.each(range, function(j) {
        max = math.max(max, a[i][j]*a[i+1][j]*a[i+2][j]*a[i+3][j]);
        max = math.max(max, a[i][j]*a[i][j+1]*a[i][j+2]*a[i][j+3]);
        max = math.max(max, a[i][j]*a[i+1][j+1]*a[i+2][j+2]*a[i+3][j+3]);
        max = math.max(max, a[i+3][j]*a[i+2][j+1]*a[i+1][j+2]*a[i][j+3]);
      });
    });

    console.timeEnd('time');
    console.log('Solution: ' + max);
  };

  fs.readFile('problems/11.txt', function(err, data) {
    if (err) {
      console.error('Cannot read file');
      return;
    } else {
      cb(data);
    }
  });
};

