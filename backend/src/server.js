// backend/src/server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js"; // keep this if you use your ENV wrapper

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// CORS: allow only your frontend origin (recommended)
const allowedOrigin =
  process.env.ALLOWED_ORIGIN || "https://talk-code.vercel.app";

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin like curl / Postman
      if (!origin) return callback(null, true);
      // allow if matches allowedOrigin
      if (origin === allowedOrigin) return callback(null, true);
      // otherwise block
      return callback(new Error("Not allowed by CORS"));
    },
    //credentials: true meaning ?=> server allows a browser to include cookies on request
    credentials: true,
  })
);

// Optional: simpler (allows any origin) - use only for quick testing
// app.use(cors()); // <-- not recommended for production if using cookies or secrets

// Simple health route
app.get("/health", (req, res) => {
  res.status(200).json({ msg: "success from api" });
});

// -- Add your other API routes below --
// e.g. app.use("/api/users", usersRouter);

// If you ever want the backend to serve the frontend build (NOT needed if frontend is on Vercel)
// keep this commented out unless you actually deploy both together on the same host.
/*
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}
*/

// Start server: prefer ENV.PORT (from your env wrapper), then process.env.PORT, then 8000
const port = ENV?.PORT || process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
