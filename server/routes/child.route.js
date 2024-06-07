import express from "express";
import {
  saveChildController,
  updateChildController,
  deleteChildController,
  getChildByIdController,
  getAllChildrenController,
} from "../controllers/index.js";

const ChildRouter = express.Router();

// Route to add a new child
ChildRouter.post("/", saveChildController);

// Route to update a child by ID
ChildRouter.put("/:id", updateChildController);

// Route to delete a child by ID
ChildRouter.delete("/:id", deleteChildController);

// Route to get a child by ID
ChildRouter.get("/:id", getChildByIdController);

// Route to get all children
ChildRouter.get("/", getAllChildrenController);

export default ChildRouter;
