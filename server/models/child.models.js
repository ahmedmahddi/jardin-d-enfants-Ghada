import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";
const Child = sequelize.define(
  "Child",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
      allowNull: false,
    },
    fatherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fatherPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motherName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    motherPhone: {
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
    parentID: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "Children",
    timestamps: true,
  }
);

export default Child;
