const User = require("./user.model.js");
const Children = require("./children.model.js");
const Staff = require("./staff.model.js");
const Enrollment = require("./enrollment.model.js");
const Event = require("./event.model.js");
const contactUs = require("./contactUs.model.js");
const { Invoice, InvoiceHistory, Path } = require("./invoice.model.js");

// Associations

User.hasMany(Children, { foreignKey: "parentId" });
Children.belongsTo(User, { foreignKey: "parentId" });

Staff.belongsTo(User, { foreignKey: "userId" });
User.hasOne(Staff, { foreignKey: "userId" });

Invoice.belongsTo(User, { foreignKey: "parentId", as: "parent" });
User.hasMany(Invoice, { foreignKey: "parentId" });

Invoice.belongsTo(Children, { foreignKey: "childId", as: "child" });
Children.hasMany(Invoice, { foreignKey: "childId" });

InvoiceHistory.belongsTo(User, { foreignKey: "parentId", as: "parent" });
User.hasMany(InvoiceHistory, { foreignKey: "parentId" });

InvoiceHistory.belongsTo(Children, { foreignKey: "childId", as: "child" });
Children.hasMany(InvoiceHistory, { foreignKey: "childId" });

module.exports = {
  User,
  Children,
  Staff,
  Enrollment,
  Event,
  Invoice,
  InvoiceHistory,
  Path,
  contactUs,
};
