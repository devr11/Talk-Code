import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success from api" });
});

// This part is only needed if the backend is serving the frontend build.
// If Vercel serves your frontend, you can actually delete this block.
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(ENV.PORT, () =>
  console.log(`Server is running on port ${ENV.PORT}`)
);
