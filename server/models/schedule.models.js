import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const Schedule = sequelize.define(
  "Schedule",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    childID: { type: DataTypes.UUID, allowNull: false },
    childName: { type: DataTypes.STRING, allowNull: false },
    subject: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    startingTime: { type: DataTypes.TIME, allowNull: false },
    endingTime: { type: DataTypes.TIME, allowNull: false },
    day: {
      type: DataTypes.ENUM(
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ),
      allowNull: false,
    },
    teacherName: { type: DataTypes.STRING, allowNull: false },
    staffID: { type: DataTypes.INTEGER },
    date: { type: DataTypes.DATE },
    status: {
      type: DataTypes.ENUM("pending", "completed", "canceled"),
      defaultValue: "pending",
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: "description not added for the above date",
    },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "Schedules",
    timestamps: true,
  }
);

export default Schedule;
