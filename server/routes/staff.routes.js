const { Router } = require("express");
const {
  create,
  getById,
  getAll,
  update,
  remove,
} = require("../controllers/staff.controller.js");

const staffRouter = Router();

staffRouter.post("/", create);
staffRouter.get("/:id", getById);
staffRouter.get("/", getAll); // Added getAll route
staffRouter.put("/:id", update);
staffRouter.delete("/:id", remove);

module.exports = staffRouter;
