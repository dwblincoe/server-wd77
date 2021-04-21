const Sequelize = require("sequelize");

const db = new Sequelize("blue-77", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = db;
