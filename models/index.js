const Sequelize = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const user = require("./user");

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

user.init(sequelize);
db.user=user;

db.sequelize = sequelize;

module.exports = db;