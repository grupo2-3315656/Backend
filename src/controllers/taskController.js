import { taskModel } from "../models/taskModel.js";

export const taskController = {
    get: async (req, res) => {
        try {
            const response = await taskModel.get();
            res.status(200).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await taskModel.getById(id);
            res.status(200).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const response = await taskModel.create();
            res.status(201).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await taskModel.update(id);
            res.status(204).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await taskModel.delete(id);
            res.status(204).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
