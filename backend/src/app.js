import express from "express";
import useRouter from "./routes/user.route.js";

const app = express();

app.use(express.json());
app.use("/api/v1/users", useRouter);

export default app;