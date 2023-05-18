const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt")

class Veggie extends Model {}

Veggie.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
  
);

module.exports = Veggie;