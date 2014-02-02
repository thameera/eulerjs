var _ = require('lodash');

var biggie = function(str) {
  var that = {};

  that.sval = str;

  var getArr = function(s) {
    return s.split('').reverse();
  };

  var num = function(c) {
    if (!c) {
      return 0;
    } else {
      return +c;
    }
  };

  var add = function(a, b) {
    a = getArr(a.sval);
    b = getArr(b.sval);
    var len = Math.max(a.length, b.length);
    var sum = '', residue = 0;
    _.each(_.range(0, len), function(i) {
      var s = num(a[i]) + num(b[i]) + residue;
      sum += s % 10;
      residue = Math.floor(s/10);
    });
    sum += getArr('' + residue);
    sum = getArr(sum).join('');
    return sum.replace(/^0+/g, '');
  };

  that.add = function(b) {
    that.sval = add(that, b);
    return that;
  };

  return that;
};

module.exports = biggie;

