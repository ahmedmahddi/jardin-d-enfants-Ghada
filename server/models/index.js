import User from "./user.model.js";
import Children from "./children.model.js";
import Staff from "./staff.model.js";
import Enrollment from "./enrollment.model.js";
import Event from "./event.model.js";
import contactUs from "./contactUs.model.js";
import { Invoice, InvoiceHistory, Path } from "./invoice.model.js";

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

export {
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
