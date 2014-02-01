var _ = require('lodash'),
    mathjs = require('mathjs'),
    utils = require('./utils');

var math = mathjs();

var prob = +process.argv.splice(2)[0];
if (!prob) prob = 1;

console.log('Running problem ' + prob + '...');
require('./problems/' + prob + '.js')(_, math, utils);

