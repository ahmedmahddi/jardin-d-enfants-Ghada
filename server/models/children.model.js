// models/child.model.js
import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";
import User from "./user.model.js";

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
      type: DataTypes.ARRAY(DataTypes.STRING),
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

export default Children;
