// backend/src/server.js
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

// health check route
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success from api" });
});

// ❌ REMOVE this whole part (not needed on Render)
// if (ENV.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../frontend/dist")));
//
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
//   });
// }

// IMPORTANT: use the port from env (Render sets PORT)
app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});
