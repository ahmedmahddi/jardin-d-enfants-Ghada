import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Medicine = sequelize.define(
  "Medicine",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    childID: { type: DataTypes.UUID, allowNull: false },
    childName: { type: DataTypes.STRING, allowNull: false },
    medicineName: { type: DataTypes.STRING, allowNull: false },
    morning: { type: DataTypes.STRING, allowNull: false },
    evening: { type: DataTypes.STRING, allowNull: false },
    beforeAfterMeal: { type: DataTypes.STRING, allowNull: false },
    staffID: { type: DataTypes.INTEGER },
    date: { type: DataTypes.DATE },
    status: {
      type: DataTypes.ENUM("pending", "administered"),
      defaultValue: "pending",
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "description not added for the above date",
    },
    parentID: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "Medicines",
    timestamps: true,
  }
);

export default Medicine;
