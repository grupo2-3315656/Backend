import express from "express";
import cors from "cors";
import { router } from "./src/routes/taskRoutes.js";
import { router as userRouter } from "./src/routes/userRoutes.js";
import { router as assignmentRouter } from "./src/routes/assignmentRoutes.js";
import { errorMiddelware, errorNotFoundHandler } from "./src/utils/errorHandler.js";

const port = 3000;
const host = "0.0.0.0";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", router);
app.use("/api", userRouter);
app.use("/api", assignmentRouter);

app.use(errorNotFoundHandler);
app.use(errorMiddelware);

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
