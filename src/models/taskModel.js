import crypto from "crypto";
import { db } from "../data/config.js";

export const taskModel = {
    get: async () => {
        const sql = "SELECT * FROM tasks";
        const [result] = await db.query(sql);
        return result;
    },

    getById: async (id) => {
        const sql = "SELECT * FROM tasks WHERE id = ?";
        const [result] = await db.query(sql, [id]);
        return result[0] || null;
    },

    create: async (data) => {
        const id = crypto.randomUUID();
        const date = new Date().toISOString().replace("T", " ").slice(0, 19);
        const sql = "INSERT INTO tasks (id, title, description, status, date) VALUES (?, ?, ?, ?, ?)";
        await db.query(sql, [id, data.title, data.description, data.status, date]);
        return { id, ...data, date };
    },

    update: async (id, data) => {
        const fields = [];
        const values = [];
        if (data.title !== undefined) {
            fields.push("title = ?");
            values.push(data.title);
        }
        if (data.description !== undefined) {
            fields.push("description = ?");
            values.push(data.description);
        }
        if (data.status !== undefined) {
            fields.push("status = ?");
            values.push(data.status);
        }
        if (fields.length === 0) return null;

        values.push(id);
        const sql = `UPDATE tasks SET ${fields.join(", ")} WHERE id = ?`;
        const [result] = await db.query(sql, values);
        return result.affectedRows > 0 ? { id, ...data } : null;
    },

    delete: async (id) => {
        const sql = "DELETE FROM tasks WHERE id = ?";
        const [result] = await db.query(sql, [id]);
        return result.affectedRows > 0 ? { id } : null;
    },
};
