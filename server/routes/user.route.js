import express from "express";
import {
  saveUser,
  loginUser,
  getUser,
  getAllUsers,
  viewProfile,
  updateUser,
  deleteUser,
} from "../controllers/index.js";

const UserRouter = express.Router();

// Route to register a new user
UserRouter.post("/register", saveUser);

// Route for user login
UserRouter.post("/login", loginUser);

// Route to get user by ID
UserRouter.get("/:id", getUser);

// Route to get all users
UserRouter.get("/", getAllUsers);

// Route to view the profile of the authenticated user
UserRouter.get("/profile", viewProfile);

// Route to update user by ID
UserRouter.put("/:id", updateUser);

// Route to delete user by ID
UserRouter.delete("/:id", deleteUser);

export default UserRouter;
