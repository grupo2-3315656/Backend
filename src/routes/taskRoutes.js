import express from "express";
import { taskController } from "../controllers/taskController.js";

const router = express.Router();

router.get("/tasks", taskController.get);
router.get("/tasks/:id", taskController.getById);
router.post("/tasks", taskController.create);
router.patch("/tasks/:id", taskController.update);
router.delete("/tasks/:id", taskController.delete);

export { router };
