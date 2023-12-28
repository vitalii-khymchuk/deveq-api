import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use((req, res) => {
  res.status(404).json({ code: 404, message: "Not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  const { status = 500, message = "Internal server error" } = err;
  res.status(status).json({ code: status, message });
});

export default app;
