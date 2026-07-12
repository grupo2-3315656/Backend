import express from "express";
import { assignmentController } from "../controllers/assignmentController.js";

const router = express.Router();

router.get("/assignments", assignmentController.get);
router.get("/assignments/:id", assignmentController.getById);
router.get("/tasks/:id/users", assignmentController.getByTaskId);
router.get("/users/:id/tasks", assignmentController.getByUserId);
router.post("/assignments", assignmentController.create);
router.delete("/assignments/:id", assignmentController.delete);

export { router };
