var _ = require('lodash');

var prob = +process.argv.splice(2)[0];
if (!prob) prob = 1;
console.log('Running problem ' + prob + '...');
require('./problems/' + prob + '.js')(_);

