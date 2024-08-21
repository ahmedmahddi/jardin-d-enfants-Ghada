import { Router } from "express";
import authRouter from "./auth.routes.js";
import userRouter from "./user.routes.js";
import enrollmentRouter from "./enrollment.routes.js";
import staffRouter from "./staff.routes.js";
import childRouter from "./child.routes.js";
import eventRouter from "./event.routes.js";
import invoiceRouter from "./invoice.routes.js";
import protect from "../middleware/protect.middleware.js";
import contactusRouter from "./contactus.routes.js";

const apirouter = Router();

apirouter.use("/users", protect, userRouter);
apirouter.use("/enrollments", enrollmentRouter);
apirouter.use("/staff", protect, staffRouter);
apirouter.use("/children", protect, childRouter);
apirouter.use("/events", protect, eventRouter);
apirouter.use("/invoices", protect, invoiceRouter);

//non auth routes
apirouter.use("/auth", authRouter);
apirouter.use("/contact", contactusRouter);

export default apirouter;
