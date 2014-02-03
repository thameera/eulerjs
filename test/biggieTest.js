var assert = require('assert'),
    biggie = require('../biggie');

describe('Biggie', function() {
  describe('Basic', function() {
    it('should create basic biggies', function() {
      assert.equal('34', biggie('34').sval);
      assert.equal('0', biggie('0').sval);
      assert.equal('0', biggie().sval);
      assert.equal('98765432123456789', biggie('98765432123456789').sval);
    });
  });

  describe('Arithmetic', function() {
    it('should add other biggies correctly', function() {
      var a = biggie('72'), b = biggie('105'), c = biggie('1000');
      a.add(b);
      assert.equal('177', a.sval);
      assert.equal('105', b.sval);

      a.add(a).add(c);
      assert.equal('1354', a.sval);
      assert.equal('1000', c.sval);
    });

    it('should multiply biggies correctly', function() {
      var a = biggie('12'), b = biggie('7');
      a.prod(b);
      assert.equal('84', a.sval);
      assert.equal('7', b.sval);

      a = biggie('72'); b = biggie('12');
      a.prod(b);
      assert.equal('864', a.sval);

      a = biggie('63498'); b = biggie('889');
      a.prod(b);
      assert.equal('56449722', a.sval);

      b = biggie('9123');
      a.prod(b);
      assert.equal('514990813806', a.sval);
    });
  });
});

