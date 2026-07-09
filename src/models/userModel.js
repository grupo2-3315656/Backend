import crypto from "crypto";
import { db } from "../utils/db.js";

export const userModel = {
    get: async () => {
        await db.read();
        return db.data.users;
    },

    getById: async (id) => {
        await db.read();
        return db.data.users.find((u) => u.id === id) || null;
    },

    create: async (data) => {
        await db.read();
        const newUser = {
            id: crypto.randomUUID(),
            name: data.name,
            email: data.email,
            date: new Date().toISOString(),
        };
        db.data.users.push(newUser);
        await db.write();
        return newUser;
    },

    update: async (id, data) => {
        await db.read();
        const index = db.data.users.findIndex((u) => u.id === id);
        if (index === -1) return null;

        db.data.users[index] = {
            ...db.data.users[index],
            ...data,
            id,
        };
        await db.write();
        return db.data.users[index];
    },

    delete: async (id) => {
        await db.read();
        const index = db.data.users.findIndex((u) => u.id === id);
        if (index === -1) return null;

        const deleted = db.data.users.splice(index, 1)[0];
        await db.write();
        return deleted;
    },
};
