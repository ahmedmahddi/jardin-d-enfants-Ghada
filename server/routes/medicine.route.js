import express from "express";
import {
  saveMedicineController,
  updateMedicineController,
  deleteMedicineController,
  getMedicinesController,
  getMedicinesForStaffController,
  getMedicinesForParentController,
} from "../controllers/index.js";

const medicineRouter = express.Router();

medicineRouter.post("/", saveMedicineController);
medicineRouter.delete("/:id", deleteMedicineController);
medicineRouter.put("/:id", updateMedicineController);
medicineRouter.get("/:id", getMedicinesController);
medicineRouter.get("/staff/:id", getMedicinesForStaffController);
medicineRouter.get("/parent/:id", getMedicinesForParentController);

export default medicineRouter;
