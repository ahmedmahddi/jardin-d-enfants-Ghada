import express from "express";
import {
  saveMedicineController,
  updateMedicineController,
  deleteMedicineController,
  getMedicinesController,
  getMedicinesForStaffController,
  getMedicinesForParentController,
} from "../controllers/index.js";

const MedicineRouter = express.Router();

// Route to add a new medicine
MedicineRouter.post("/", saveMedicineController);

// Route to update a medicine by ID
MedicineRouter.put("/:id", updateMedicineController);

// Route to delete a medicine by ID
MedicineRouter.delete("/:id", deleteMedicineController);

// Route to get all medicines for a specific child by child ID
MedicineRouter.get("/child/:id", getMedicinesController);

// Route to get all medicines assigned to the authenticated staff
MedicineRouter.get("/staff", getMedicinesForStaffController);

// Route to get all medicines assigned to a specific parent by parent ID
MedicineRouter.get("/parent/:id", getMedicinesForParentController);

export default MedicineRouter;
