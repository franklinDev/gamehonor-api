var express = require('express');
var router  = express.Router();
var PSNjs   = require('./../models/psn-api');
var psn     = PSNjs.psnObj;


/* GET home page. */
router.get('/', function(req, res, next) {

    psn.getUserTrophies(function(error, data) {
        // check for an error
        if (error)
        {
            console.log("Error fetching trophies: " + error);
            return;
        }
        res.json(data);
        // success! print out trophy data
        console.log(JSON.stringify(data, null, 2));
    });
});

module.exports = router;
