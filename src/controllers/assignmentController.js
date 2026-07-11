import { assignmentModel } from "../models/assignmentModel.js";
import { taskModel } from "../models/taskModel.js";
import { userModel } from "../models/userModel.js";
import { errorHandler } from "../utils/errorHandler.js";

export const assignmentController = {
    get: async (req, res) => {
        try {
            const assignments = await assignmentModel.get();
            res.json(assignments);
        } catch (error) {
            errorHandler(error, res);
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const assignment = await assignmentModel.getById(id);
            if (!assignment) {
                return res.status(404).json({ error: "Asignación no encontrada" });
            }
            res.json(assignment);
        } catch (error) {
            errorHandler(error, res);
        }
    },

    getByTaskId: async (req, res) => {
        try {
            const { id } = req.params;
            const task = await taskModel.getById(id);
            if (!task) {
                return res.status(404).json({ error: "Tarea no encontrada" });
            }

            const assignments = await assignmentModel.getByTaskId(id);
            const userIds = assignments.map((a) => a.userId);
            const users = await userModel.get();
            const assignedUsers = users.filter((u) => userIds.includes(u.id));

            res.json(assignedUsers);
        } catch (error) {
            errorHandler(error, res);
        }
    },

    getByUserId: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userModel.getById(id);
            if (!user) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }

            const assignments = await assignmentModel.getByUserId(id);
            const taskIds = assignments.map((a) => a.taskId);
            const tasks = await taskModel.get();
            const assignedTasks = tasks.filter((t) => taskIds.includes(t.id));

            res.json(assignedTasks);
        } catch (error) {
            errorHandler(error, res);
        }
    },

    create: async (req, res) => {
        try {
            const { taskId, userId } = req.body;

            if (!taskId || !userId) {
                return res.status(400).json({
                    error: "Faltan campos requeridos: taskId, userId",
                });
            }

            const task = await taskModel.getById(taskId);
            if (!task) {
                return res.status(404).json({ error: "Tarea no encontrada" });
            }

            const user = await userModel.getById(userId);
            if (!user) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }

            const assignment = await assignmentModel.create({ taskId, userId });
            res.status(201).json(assignment);
        } catch (error) {
            errorHandler(error, res);
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await assignmentModel.delete(id);
            if (!deleted) {
                return res.status(404).json({ error: "Asignación no encontrada" });
            }
            res.json(deleted);
        } catch (error) {
            errorHandler(error, res);
        }
    },
};
