import crypto from "crypto";

export const taskModel = {
    get: async () => {
        await db.read();
        return db.data.tasks;
    },

    getById: async (id) => {
        await db.read();
        return db.data.tasks.find((t) => t.id === id) || null;
    },

    create: async (data) => {
        await db.read();
        const newTask = {
            id: crypto.randomUUID(),
            title: data.title,
            description: data.description,
            status: data.status,
            date: new Date().toISOString(),
        };
        db.data.tasks.push(newTask);
        await db.write();
        return newTask;
    },

    update: async (id, data) => {
        await db.read();
        const index = db.data.tasks.findIndex((t) => t.id === id);
        if (index === -1) return null;

        db.data.tasks[index] = {
            ...db.data.tasks[index],
            ...data,
            id,
        };
        await db.write();
        return db.data.tasks[index];
    },

    delete: async (id) => {
        await db.read();
        const index = db.data.tasks.findIndex((t) => t.id === id);
        if (index === -1) return null;

        const deleted = db.data.tasks.splice(index, 1)[0];
        await db.write();
        return deleted;
    },
};
