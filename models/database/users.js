module.exports = function (sequelize, Sequelize) {
    var users = sequelize.define('users', {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER
    });
    return users;
}