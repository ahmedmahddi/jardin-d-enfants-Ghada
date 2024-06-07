import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Payment = sequelize.define(
  "Payment",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    paymentName: { type: DataTypes.STRING, allowNull: false },
    paymentType: {
      type: DataTypes.ENUM("cash", "credit", "debit"),
      allowNull: false,
    },
    paymentAmount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    billID: { type: DataTypes.INTEGER, allowNull: false },
    childID: { type: DataTypes.UUID, allowNull: false },
    paymentStatus: {
      type: DataTypes.ENUM("pending", "completed", "failed"),
      defaultValue: "pending",
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "Payments",
    timestamps: true,
  }
);

export default Payment;
