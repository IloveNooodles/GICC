import express from "express";

import userRoutes from "./routes/users.routes.js";
import dbRoutes from "./routes/db.routes.js";

const app = express();
const port = process.env.port || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.status(200).send("Hello world");
});

app.use("/user", userRoutes);

app.use("/db", dbRoutes);

app.get("/delete", async (req, res) => {
  try {
    const result = await driveService.files.list({});

    if (result) {
      result.data.files.forEach((file) => {
        setTimeout(async () => {
          const deleted = await driveService.files.delete({ fileId: file.id });
          if (deleted) {
            console.log("success");
          }
        }, 500);
      });
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`Listening at http://127.0.0.1:${port}/`);
});
