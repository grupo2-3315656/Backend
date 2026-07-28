import { db } from "../data/config.js";

export const userModel = {
    get: async () => {
        const sql = "SELECT * FROM users";
        const [result] = await db.query(sql);
        return result;
    },

    getById: async (id) => {
        const sql = "SELECT * FROM users WHERE id_user = ?";
        const [result] = await db.query(sql, [id]);
        return result[0] || null;
    },

    create: async (data) => {
        const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        const [result] = await db.query(sql, [data.name, data.email]);
        return { id_user: result.insertId, ...data };
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
        const sql = `UPDATE users SET ${fields.join(", ")} WHERE id_user = ?`;
        const [result] = await db.query(sql, values);
        return result.affectedRows > 0 ? { id_user: id, ...data } : null;
    },

    delete: async (id) => {
        const sql = "DELETE FROM users WHERE id_user = ?";
        const [result] = await db.query(sql, [id]);
        return result.affectedRows > 0 ? { id_user: id } : null;
    },
};
