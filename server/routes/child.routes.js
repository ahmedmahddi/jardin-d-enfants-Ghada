import { Router } from "express";
import {
  create,
  getById,
  update,
  remove,
  getAll,
} from "../controllers/child.controller.js";

const childRouter = Router();

childRouter.post("/", create);
childRouter.get("/:id", getById);
childRouter.get("/", getAll);
childRouter.put("/:id", update);
childRouter.delete("/:id", remove);

export default childRouter;
