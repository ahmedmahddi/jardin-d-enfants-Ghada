const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'staff', 'parent'),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: 'Users',
  }
);

module.exports = User;
