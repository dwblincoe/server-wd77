const sequelize = require("sequelize");
const db = require("../db");

const { STRING } = sequelize;

const User = db.define("user", {
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = User;
