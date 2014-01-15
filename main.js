var _ = require('lodash'),
    mathjs = require('mathjs');

var math = mathjs();

var prob = +process.argv.splice(2)[0];
if (!prob) prob = 1;

console.log('Running problem ' + prob + '...');
require('./problems/' + prob + '.js')(_, math);

