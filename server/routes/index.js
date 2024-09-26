const express = require("express");
const authRouter = require("./auth.routes.js");
const userRouter = require("./user.routes.js");
const enrollmentRouter = require("./enrollment.routes.js");
const staffRouter = require("./staff.routes.js");
const childRouter = require("./child.routes.js");
const eventRouter = require("./event.routes.js");
const invoiceRouter = require("./invoice.routes.js");
const protect = require("../middleware/protect.middleware.js");
const contactusRouter = require("./contactus.routes.js");
const tokenrouter = require("./token.routes.js");

const apirouter = express.Router();

apirouter.use("/users", protect, userRouter);
apirouter.use("/staff", protect, staffRouter);
apirouter.use("/children", protect, childRouter);
apirouter.use("/events", protect, eventRouter);
apirouter.use("/invoices", protect, invoiceRouter);

// Non-auth routes
apirouter.use("/auth", authRouter);
apirouter.use("/contact", contactusRouter);
apirouter.use("/token", tokenrouter);
apirouter.use("/enrollments", enrollmentRouter);

module.exports = apirouter;
