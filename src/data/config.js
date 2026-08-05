import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

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
