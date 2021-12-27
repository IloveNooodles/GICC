import express from "express";

import userRoutes from "./routes/users.routes.js";
import fileRoutes from "./routes/files.routes.js";
import teamRoutes from "./routes/teams.routes.js";

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.status(200).send("Hello world");
});

app.use("/user", userRoutes);
app.use("/file", fileRoutes);
app.use("/team", teamRoutes);

app.listen(port, () => {
  console.log(`Listening at http://127.0.0.1:${port}/`);
});
