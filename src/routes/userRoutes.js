import express from "express";
import { userController } from "../controllers/userController.js";

const router = express.Router();

router.get("/users", userController.get);
router.get("/users/:id", userController.getById);
router.post("/users", userController.create);
router.put("/users/:id", userController.update);
router.delete("/users/:id", userController.delete);

export { router };
