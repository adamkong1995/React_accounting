const Sequelize = require('sequelize');
const keys = require('../keys');

module.exports = new Sequelize(keys.DATABASE_URL)