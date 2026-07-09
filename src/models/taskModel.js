export const taskModel = {
    get: async () => {
        return { messaje: "Obtener todas las tareas" };
    },
    getById: async (id) => {
        return { messaje: "Obtener una sola tarea" };
    },
    create: async () => {
        return { messaje: "Crear una tarea" };
    },
    update: async (id) => {
        return { messaje: "Actualizar una tarea" };
    },
    delete: async (id) => {
        return { messaje: "Eliminar una tarea" };
    },
};