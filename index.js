import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Routes from "./routes/route.js";
dotenv.config();
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}
app.listen(PORT, () => {
  console.log(`To do app listening at http://localhost:${PORT}`);
});
DefaultData();
app.use(cors());
app.use("/", Routes);
