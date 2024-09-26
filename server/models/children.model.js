const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db.js");
const User = require("./user.model.js");

class Children extends Model {}

Children.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    childName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("Masculin", "Femenin"),
      allowNull: false,
    },
    days: {
      type: DataTypes.JSON, // Replaced ARRAY with JSON for MySQL compatibility
      allowNull: false,
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    parentName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    parentWork: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondPersonName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondPersonPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    medications: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Child",
    timestamps: true,
  }
);

module.exports = Children;
