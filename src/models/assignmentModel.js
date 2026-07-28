import crypto from "crypto";
import { db } from "../data/config.js";

export const assignmentModel = {
    get: async () => {
        const sql = "SELECT * FROM assignments";
        const [result] = await db.query(sql);
        return result;
    },

    getById: async (id) => {
        const sql = "SELECT * FROM assignments WHERE id = ?";
        const [result] = await db.query(sql, [id]);
        return result[0] || null;
    },

    getByTaskId: async (taskId) => {
        const sql = "SELECT * FROM assignments WHERE task_id = ?";
        const [result] = await db.query(sql, [taskId]);
        return result;
    },

    getByUserId: async (userId) => {
        const sql = "SELECT * FROM assignments WHERE user_id = ?";
        const [result] = await db.query(sql, [userId]);
        return result;
    },

    create: async (data) => {
        const id = crypto.randomUUID();
        const assignedAt = new Date().toISOString();
        const sql = "INSERT INTO assignments (id, task_id, user_id, assigned_at) VALUES (?, ?, ?, ?)";
        await db.query(sql, [id, data.taskId, data.userId, assignedAt]);
        return { id, taskId: data.taskId, userId: data.userId, assignedAt };
    },

    delete: async (id) => {
        const sql = "SELECT * FROM assignments WHERE id = ?";
        const [result] = await db.query(sql, [id]);
        if (result.length === 0) return null;
        await db.query("DELETE FROM assignments WHERE id = ?", [id]);
        return result[0];    },
};
