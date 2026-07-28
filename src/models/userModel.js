import crypto from "crypto";
import { db } from "../data/config.js";

export const userModel = {
    get: async () => {
        const sql = "SELECT * FROM users";
        const [result] = await db.query(sql);
        return result;
    },

    getById: async (id) => {
        const sql = "SELECT * FROM users WHERE id = ?";
        const [result] = await db.query(sql, [id]);
        return result[0] || null;
    },

    create: async (data) => {
        const id = crypto.randomUUID();
        const date = new Date().toISOString().replace("T", " ").slice(0, 19);
        const sql = "INSERT INTO users (id, name, email, date) VALUES (?, ?, ?, ?)";
        await db.query(sql, [id, data.name, data.email, date]);
        return { id, ...data, date };
    },

    update: async (id, data) => {
        const fields = [];
        const values = [];
        if (data.name !== undefined) {
            fields.push("name = ?");
            values.push(data.name);
        }
        if (data.email !== undefined) {
            fields.push("email = ?");
            values.push(data.email);
        }
        if (fields.length === 0) return null;

        values.push(id);
        const sql = `UPDATE users SET ${fields.join(", ")} WHERE id = ?`;
        const [result] = await db.query(sql, values);
        return result.affectedRows > 0 ? { id, ...data } : null;
    },

    delete: async (id) => {
        const sql = "DELETE FROM users WHERE id = ?";
        const [result] = await db.query(sql, [id]);
        return result.affectedRows > 0 ? { id } : null;
    },
};
