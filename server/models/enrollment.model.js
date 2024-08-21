import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Enrollment = sequelize.define(
  "Enrollment",
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
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("pending", "approved", "rejected"),
      defaultValue: "pending",
    },
  },
  {
    timestamps: true,
    tableName: "enrollments",
  }
);

export default Enrollment;
