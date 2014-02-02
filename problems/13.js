module.exports = function(_, math, utils) {
  console.log('Problem: Large sum');
  console.time('time');

  var fs = require('fs'),
      biggie = require('../biggie');

  var cb = function(data) {
    var sum = biggie('0');
    String.prototype.split.call(data, /\n/g).forEach(function(i) {
      if (i)
        sum.add(biggie(i));
    });

    console.timeEnd('time');
    console.log('Solution: ' + sum.sval.substring(0, 10));
  };

  fs.readFile('problems/13.txt', function(err, data) {
    if (err) {
      console.error('Cannot read file');
      return;
    } else {
      cb(data);
    }
  });

};

