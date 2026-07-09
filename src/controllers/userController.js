import { userModel } from "../models/userModel.js";

export const userController = {
    get: async (req, res) => {
        try {
            const response = await userModel.get();
            res.status(200).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await userModel.getById(id);
            res.status(200).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    create: async (req, res) => {
        try {
            const response = await userModel.create();
            res.status(201).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await userModel.update(id);
            res.status(204).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const response = await userModel.delete(id);
            res.status(204).json({ messaje: response.messaje });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};
