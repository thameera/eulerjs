module.exports = function(_, math, utils) {
  console.log('Problem: Number letter counts');
  console.time('time');

  var word = function() {
    var a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
        b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        c = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    return function(n) {
      var w = '', i;
      if (n === 1000) {
        return 'one thousand';
      }
      if (n >= 100) {
        i = Math.floor(n/100);
        n %= 100;
        w += a[i] + ' hundred';
        if (n > 0) w += ' and ';
      }
      if (n >= 20) {
        i = Math.floor(n/10);
        n %= 10;
        w += b[i];
        if (n > 0) w += '-' + a[n];
      } else if (n > 10) {
        w += c[n - 10];
      } else {
        w += a[n];
      }
      return w;
    };
  }();

  var sol = 0;
  _.range(1, 1001).forEach(function(i) {
    sol += word(i).replace(/[ -]/g, '').length;
  });

  console.timeEnd('time');
  console.log('Solution: ' + sol);
};

