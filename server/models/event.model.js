const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.js');

class Event extends Model {}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    googleCalendarEventId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Event',
    timestamps: true,
  }
);

module.exports = Event;
