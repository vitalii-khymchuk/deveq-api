import dotenv from "dotenv";
// require("module-alias/register");
import app from "./app.js";

dotenv.config();

const { PORT = 3000, DB_HOST } = process.env;

const init = async () => {
  app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
  });
};

init();
