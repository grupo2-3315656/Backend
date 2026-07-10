export const errorMiddelware = (err, req, res, next) => {
    if (err.type === "entity.parse.failed") {
        return res.status(400).json({ error: "JSON inválido en el body" });
    }
    console.error(`[${new Date().toISOString()}] ${err.message}`);
    res.status(500).json({ error: err.message });
};

export const errorHandler = (error, res) => {
    console.error(`[${new Date().toISOString()}] ${error.message}`);
    console.error(error.stack);
    res.status(500).json({ error: error.message });
};
