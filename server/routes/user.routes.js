const { Router } = require("express");
const {
  create,
  getById,
  update,
  remove,
} = require("../controllers/user.controller.js");

const userRouter = Router();

userRouter.post("/", create);
userRouter.get("/:id", getById);
userRouter.put("/:id", update);
userRouter.delete("/:id", remove);

module.exports = userRouter;
