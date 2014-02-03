var _ = require('lodash');

var biggie = function(str) {
  var that = {};

  that.sval = str || '0';

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

  var prod = function(a, b) {
    a = getArr(a.sval);
    b = getArr(b.sval);
    var result = biggie(), residue = 0, val, s;

    b.forEach(function(c, i) {
      s = ''; residue = 0;
      _.times(i, function(n) { s += '0'; });

      a.forEach(function(d) {
        val = num(c) * num(d) + residue;
        residue = Math.floor(val/10);
        s += val % 10;
      });

      s += getArr('' + residue);
      s = getArr(s).join('');
      result.add(biggie(s));
    });

    return result.sval;
  };

  that.add = function(b) {
    that.sval = add(that, b);
    return that;
  };

  that.prod = function(b) {
    that.sval = prod(that, b);
    return that;
  };

  return that;
};

module.exports = biggie;

