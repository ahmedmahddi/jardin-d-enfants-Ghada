import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Employee = sequelize.define(
  "Employee",
  {
    empID: { type: DataTypes.INTEGER, primaryKey: true },
    fullName: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    nic: { type: DataTypes.STRING, unique: true, allowNull: false },
    phoneNo: { type: DataTypes.STRING, allowNull: false },
    dob: { type: DataTypes.DATEONLY, allowNull: false },
    recruitDate: { type: DataTypes.DATEONLY },
    type: {
      type: DataTypes.ENUM("teacher", "staff", "admin"),
      allowNull: false,
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "Employees",
    timestamps: true,
  }
);

export default Employee;
