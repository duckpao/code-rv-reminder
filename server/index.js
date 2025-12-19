import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import "./reminder.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// fix __dirname cho ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve React build
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// fallback cho React Router
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../client/dist/index.html")
  );
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Fullstack app running on ${PORT}`);
});
