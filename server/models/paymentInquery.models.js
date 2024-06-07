import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const PaymentInq = sequelize.define(
  "PaymentInquiry",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    childID: { type: DataTypes.UUID, allowNull: false },
    paymentID: { type: DataTypes.INTEGER
     },
    billID: { type: DataTypes.INTEGER },
    type: { type: DataTypes.ENUM("inquiry", "dispute"), allowNull: false },
    contactNumber: { type: DataTypes.STRING, allowNull: false },
    emailAddress: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "PaymentInqs",
    timestamps: true,
  }
);

export default PaymentInq;
