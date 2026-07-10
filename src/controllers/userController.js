import { userModel } from "../models/userModel.js";
import { errorHandler } from "../utils/errorHandler.js";

export const userController = {
    get: async (req, res) => {
        try {
            const users = await userModel.get();
            res.json(users);
        } catch (error) {
            errorHandler(error, res);
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await userModel.getById(id);
            if (!user) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }
            res.json(user);
        } catch (error) {
            errorHandler(error, res);
        }
    },

    create: async (req, res) => {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
                return res.status(400).json({
                    error: "Faltan campos requeridos: name, email",
                });
            }
            const user = await userModel.create({ name, email });
            res.status(201).json(user);
        } catch (error) {
            errorHandler(error, res);
        }
    },

    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, email } = req.body;
            if (!name && !email) {
                return res.status(400).json({
                    error: "Se requiere al menos un campo para actualizar: name, email",
                });
            }
            const existing = await userModel.getById(id);
            if (!existing) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }
            const updated = await userModel.update(id, { name, email });
            res.json(updated);
        } catch (error) {
            errorHandler(error, res);
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await userModel.delete(id);
            if (!deleted) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }
            res.json(deleted);
        } catch (error) {
            errorHandler(error, res);
        }
    },
};
