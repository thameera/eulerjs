module.exports = function(_, math, utils) {
  console.log('Problem: Power digit sum');
  console.time('time');

  var biggie = require('../biggie');
  var a = biggie('2'), b = biggie('2');

  _.range(1, 1000).forEach(function() {
    a.prod(b);
  });

  var vals = utils.atoi(a.sval.split(''));
  var sol = utils.arraySum(vals);

  console.timeEnd('time');
  console.log('Solution: ' + sol);
};

