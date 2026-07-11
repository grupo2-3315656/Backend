import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(__dirname, "../../data/db.json");

const adapter = new JSONFile(file);
const db = new Low(adapter, { users: [], tasks: [], assignments: [] });

await db.read();

export { db };
