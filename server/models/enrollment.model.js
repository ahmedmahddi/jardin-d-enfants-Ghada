import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Enrollment = sequelize.define(
  "Enrollment",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    childName: { type: DataTypes.STRING, allowNull: false },
    birthdate: { type: DataTypes.DATEONLY, allowNull: false },
    age: { type: DataTypes.INTEGER, allowNull: false },
    address1: { type: DataTypes.STRING, allowNull: false },
    address2: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.STRING, allowNull: false },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
      allowNull: false,
    },
    hours: { type: DataTypes.STRING, allowNull: false },
    days: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    fatherName: { type: DataTypes.STRING, allowNull: false },
    fatherPhone: { type: DataTypes.STRING, allowNull: false },
    fatherEmail: { type: DataTypes.STRING, allowNull: false },
    fatherWork: { type: DataTypes.STRING, allowNull: false },
    motherName: { type: DataTypes.STRING, allowNull: false },
    motherPhone: { type: DataTypes.STRING, allowNull: false },
    motherEmail: { type: DataTypes.STRING, allowNull: false },
    motherWork: { type: DataTypes.STRING, allowNull: false },
    secondPersonName: { type: DataTypes.STRING, allowNull: false },
    secondPersonPhone: { type: DataTypes.STRING, allowNull: false },
    medications: { type: DataTypes.TEXT, allowNull: false },
    status: {
      type: DataTypes.ENUM("pending", "approved", "rejected"),
      defaultValue: "pending",
    },
    parentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "Enrollments",
    timestamps: true,
  }
);

export default Enrollment;
