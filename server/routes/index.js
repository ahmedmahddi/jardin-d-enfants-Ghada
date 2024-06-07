import express from "express";
import userRouter from "./user.route.js";
import medicineRouter from "./medicine.route.js";
import employeeRouter from "./employeeReg.route.js";
import eventRouter from "./event.route.js";
import scheduleRouter from "./schedule.route.js";
import childRouter from "./child.route.js";
import assignStaffRouter from "./assignStaff.route.js";
import paymentRouter from "./payment.route.js";
import billRouter from "./bill.route.js";
import paymentInqRouter from "./paymentInquery.route.js";
import enrollmentRouter from "./enrollment.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/medicine", medicineRouter);
apiRouter.use("/employee", employeeRouter);
apiRouter.use("/events", eventRouter);
apiRouter.use("/schedule", scheduleRouter);
apiRouter.use("/child", childRouter);
apiRouter.use("/assign", assignStaffRouter);
apiRouter.use("/payment", paymentRouter);
apiRouter.use("/bill", billRouter);
apiRouter.use("/paymentInq", paymentInqRouter);
apiRouter.use("/enrollment", enrollmentRouter);

export default apiRouter;
