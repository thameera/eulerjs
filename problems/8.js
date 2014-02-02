module.exports = function(_, math, utils) {
  console.log('Problem: Largest product in a series');
  
  var fs = require('fs');

  var prod = function(s) {
    var res = 1;
    _.each(s.split(''), function(c) {
      res *= +c;
    });
    return res;
  };

  var cb = function(data) {
    var s = data.replace(/\n/g, '');
    var max = 0;
    _.each(_.range(0, s.length - 5), function(i) {
      var p = prod(s.substring(i, i + 5));
      max = math.max(max, p);
    });

    console.log('Solution: ' + max);
  };

  fs.readFile('problems/8.txt', 'utf8', function(err, data) {
    if (err) {
      console.error('Cannot read file');
      return;
    } else {
      cb(data);
    }
  });

};

