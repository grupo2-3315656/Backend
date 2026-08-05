import { taskModel } from "../models/taskModel.js";
import { errorHandler } from "../utils/errorHandler.js";

export const taskController = {
  get: async (req, res) => {
    try {
      const tasks = await taskModel.get();
      res.json(tasks);
    } catch (error) {
      errorHandler(error, res);
    }
  },

  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const task = await taskModel.getById(id);
      if (!task) {
        return res.status(404).json({ error: "Tarea no encontrada" });
      }
      res.json(task);
    } catch (error) {
      errorHandler(error, res);
    }
  },

  create: async (req, res) => {
    try {
      const { title, description, status } = req.body;
      if (!title || !description || !status) {
        return res.status(400).json({
          error: "Faltan campos requeridos: title, description, status",
        });
      }
      const task = await taskModel.create({
        title,
        description,
        status,
      });
      res.status(201).json(task);
    } catch (error) {
      errorHandler(error, res);
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, status } = req.body;
      if (!title && !description && !status) {
        return res.status(422).json({
          error:
            "Se requiere al menos un campo para actualizar: title, description, status",
        });
      }
      const existing = await taskModel.getById(id);
      if (!existing) {
        return res.status(404).json({ error: "Tarea no encontrada" });
      }
      const updated = await taskModel.update(id, {
        title,
        description,
        status,
      });
      res.json(updated);
    } catch (error) {
      errorHandler(error, res);
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await taskModel.delete(id);
      if (!deleted) {
        return res.status(404).json({ error: "Tarea no encontrada" });
      }
      res.json(deleted);
    } catch (error) {
      errorHandler(error, res);
    }
  },
};
