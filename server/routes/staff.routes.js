// routes/staff.routes.js
import { Router } from "express";
import {
  create,
  getById,
  getAll,
  update,
  remove,
} from "../controllers/staff.controller.js";

const staffRouter = Router();

staffRouter.post("/", create);
staffRouter.get("/:id", getById);
staffRouter.get("/", getAll); // Added getAll route
staffRouter.put("/:id", update);
staffRouter.delete("/:id", remove);

export default staffRouter;
