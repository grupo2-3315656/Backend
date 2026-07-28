import crypto from "crypto";

export const assignmentModel = {
    get: async () => {
        await db.read();
        return db.data.assignments;
    },

    getById: async (id) => {
        await db.read();
        return db.data.assignments.find((a) => a.id === id) || null;
    },

    getByTaskId: async (taskId) => {
        await db.read();
        return db.data.assignments.filter((a) => a.taskId === taskId);
    },

    getByUserId: async (userId) => {
        await db.read();
        return db.data.assignments.filter((a) => a.userId === userId);
    },

    create: async (data) => {
        await db.read();
        const newAssignment = {
            id: crypto.randomUUID(),
            taskId: data.taskId,
            userId: data.userId,
            assignedAt: new Date().toISOString(),
        };
        db.data.assignments.push(newAssignment);
        await db.write();
        return newAssignment;
    },

    delete: async (id) => {
        await db.read();
        const index = db.data.assignments.findIndex((a) => a.id === id);
        if (index === -1) return null;

        const deleted = db.data.assignments.splice(index, 1)[0];
        await db.write();
        return deleted;
    },
};
