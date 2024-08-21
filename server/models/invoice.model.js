import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db.js";
import Children from "./children.model.js";
import User from "./user.model.js";

class Invoice extends Model {}

Invoice.init(
  {
    invoiceID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.ENUM("paid", "unpaid"),
      defaultValue: "unpaid",
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    childId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Children,
        key: "id",
      },
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    parentEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    childName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Invoice",
    timestamps: true,
    tableName: "Invoices",
  }
);

class Path extends Model {}

Path.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fileId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Path",
    timestamps: true,
    tableName: "Paths",
  }
);

class InvoiceHistory extends Model {}

InvoiceHistory.init(
  {
    invoiceID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Invoices",
        key: "invoiceID",
      },
    },
    status: {
      type: DataTypes.ENUM("paid", "unpaid"),
      allowNull: false,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    childId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Children,
        key: "id",
      },
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    parentEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    childName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    issueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "InvoiceHistory",
    timestamps: true,
    tableName: "InvoiceHistories",
  }
);

export { Invoice, Path, InvoiceHistory };
