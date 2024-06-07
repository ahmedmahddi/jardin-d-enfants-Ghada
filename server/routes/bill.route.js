import express from "express";
import {
  saveBillController,
  getBillController,
  getBillByIdController,
  getBillByChildIdController,
  updateBillController,
  deleteBillController,
} from "../controllers/index.js";

const BillRouter = express.Router();

// Route to create a new bill
BillRouter.post("/", saveBillController);

// Route to get all bills
BillRouter.get("/", getBillController);

// Route to get a specific bill by ID
BillRouter.get("/:id", getBillByIdController);

// Route to get bills by child ID
BillRouter.get("/child/:id", getBillByChildIdController);

// Route to update a bill by ID
BillRouter.put("/:id", updateBillController);

// Route to delete a bill by ID
BillRouter.delete("/:id", deleteBillController);

export default BillRouter;
