const sequelize = require("../config/db.js");
require("../models/index.js");

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to MySQL has been established successfully.");
    await sequelize.sync();
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { connect };
