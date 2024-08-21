import { Router } from "express";
import {
  create,
  getById,
  update,
  remove,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/", create);
userRouter.get("/:id", getById);
userRouter.put("/:id", update);
userRouter.delete("/:id", remove);

export default userRouter;
