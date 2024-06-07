import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Bill = sequelize.define(
  "Bill",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    billName: { type: DataTypes.STRING, allowNull: false },
    childID: { type: DataTypes.UUID, allowNull: false },
    item: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
    totalBill: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    status: { type: DataTypes.BOOLEAN, defaultValue: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "Bills",
    timestamps: true,
  }
);

export default Bill;
