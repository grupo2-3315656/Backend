export const userModel = {
    get: async () => {
        return { messaje: "Obtener todos los usuarios" };
    },
    getById: async (id) => {
        return { messaje: "Obtener un solo usuario" };
    },
    create: async () => {
        return { messaje: "Crear un usuario" };
    },
    update: async (id) => {
        return { messaje: "Actualizar un usuario" };
    },
    delete: async (id) => {
        return { messaje: "Eliminar un usuario" };
    },
};
