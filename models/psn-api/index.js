var fs          = require('fs');
var lodash      = require('lodash');
var PSNjs       = require('PSNjs');
var constants   = require('./../../env');

var psnObj = new PSNjs({
    email: constants.PSN_USERNAME,
    password: constants.PSN_PASSWORD,
    debug: true,
    authfile: ".psnAuth"
});

module.exports = lodash.extend({
    psnObj:psnObj
});