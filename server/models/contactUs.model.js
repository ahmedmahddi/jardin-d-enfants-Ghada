const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/db.js");

class ContactUs extends Model {}

ContactUs.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "contactUs",
    timestamps: false,
  }
);

module.exports = ContactUs;
