import sequelize from "../utils/db.js";

// Import models
import AssignStaff from "./assignStaff.models.js";
import Bill from "./bill.models.js";
import Child from "./child.models.js";
import Employee from "./employeeReg.models.js";
import Enrollment from "./enrollment.model.js";
import Event from "./event.models.js";
import Medicine from "./medicine.models.js";
import Payment from "./payment.models.js";
import PaymentInq from "./paymentInquery.models.js";
import Schedule from "./schedule.models.js";
import User from "./user.models.js";

// Define associations
Child.hasMany(AssignStaff, { foreignKey: "childID" });
Child.hasMany(Bill, { foreignKey: "childID" });
//Child.hasMany(Enrollment, { foreignKey: "childID" });
Child.hasMany(Medicine, { foreignKey: "childID" });
Child.hasMany(Payment, { foreignKey: "childID" });
Child.hasMany(PaymentInq, { foreignKey: "childID" });
Child.hasMany(Schedule, { foreignKey: "childID" });

AssignStaff.belongsTo(Child, { foreignKey: "childID" });
Bill.belongsTo(Child, { foreignKey: "childID" });
//Enrollment.belongsTo(Child, { foreignKey: "childID" });
Medicine.belongsTo(Child, { foreignKey: "childID" });
Payment.belongsTo(Child, { foreignKey: "childID" });
PaymentInq.belongsTo(Child, { foreignKey: "childID" });
Schedule.belongsTo(Child, { foreignKey: "childID" });

// Export the models
export {
  AssignStaff,
  Bill,
  Child,
  Employee,
  Enrollment,
  Event,
  Medicine,
  Payment,
  PaymentInq,
  Schedule,
  User,
  sequelize,
};
