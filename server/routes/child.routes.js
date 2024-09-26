const express = require("express");
const {
  create,
  getById,
  update,
  remove,
  getAll,
} = require("../controllers/child.controller.js");

const childRouter = express.Router();

childRouter.post("/", create);
childRouter.get("/:id", getById);
childRouter.get("/", getAll);
childRouter.put("/:id", update);
childRouter.delete("/:id", remove);

module.exports = childRouter;
