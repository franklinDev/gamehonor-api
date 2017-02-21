var path        = require('path');
var fs          = require('fs');
var Sequelize   = require('sequelize');
var constants   = require('./../../env');

var sequelize 	= new Sequelize(
		constants.DB_NAME, 
		constants.DB_USERNAME, 
		constants.DB_PASSWORD,
		{
		  	host: constants.DB_HOST,
		  	dialect: constants.DB_DIALECT,
		}
	);

var lodash      = require('lodash');
var db = {};


fs.readdirSync(__dirname).filter(function (file) {
    return (file !== 'index.js' );
}).forEach(function (file, key) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
});

module.exports = lodash.extend({
    Sequelize:Sequelize,
    sequelize:sequelize
}, db);