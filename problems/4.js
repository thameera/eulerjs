module.exports = function(_) {
  console.log('Problem: Larget palindrome product');

  var sol = 0;
  
  _.range(900, 999).forEach(function(i) {
    _.range(900, 999).forEach(function(j) {
      var n = i * j;
      var s = '' + n;
      if (s === s.split('').reverse().join('') && n > sol) sol = n;
    });
  });

  console.log('Solution: ' + sol);
};

