import express from "express";
import cors from "cors";
import { router } from "./src/routes/taskRoutes.js";
import { router as userRouter } from "./src/routes/userRoutes.js";

const port = 3000;
const host = "0.0.0.0";

const app = express();

app.use(cors({ headers: { "Access-Control-Allow-Origin": "*" } }));

app.use(express.json());

app.use("/api", router);
app.use("/api", userRouter);

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
