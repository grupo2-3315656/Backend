import { createPool } from "mysql2/promise";
import "dotenv/config";

export const db = createPool({
    host: "0.0.0.0",
    user: "root",
    password: "#Aprendiz2024",
    database: "todoTasks",
});

// Para probar la conexión inmediatamente
async function testConnection() {
    try {
        const connection = await db.getConnection();
        console.log("✅ Conectado a la base de datos MySQL con Promises");
        connection.release();
    } catch (err) {
        console.error("❌ Error conectando a la base de datos:", err.message);
    }
}

testConnection();