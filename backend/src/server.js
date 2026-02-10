// backend/src/server.js
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js"; // keep this if you use your ENV wrapper
import { serve } from "inngest/express";
import { inngest, functions } from "./lib/inngest.js";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// CORS: allow only your frontend origin (recommended)
const allowedOrigins = [
  "https://talk-code-o76a.vercel.app",
  "https://talk-code.vercel.app",
  "http://localhost:5173",
];

// credentials:true meaning??=> server allows a browser to inlcude cookies on req
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked origin: ${origin}`));
    },
    credentials: true,
  }),
);
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()

// Optional: simpler (allows any origin) - use only for quick testing
// app.use(cors()); // <-- not recommended for production if using cookies or secrets

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use("/api/chat", chatRoutes)

// Simple health route
app.get("/health", (req, res) => {
  res.status(200)
  .json({ msg: "success from api - by Dev Rastogi" });
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

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () =>
      console.log("Server is running on port:", ENV.PORT),
    );
  } catch (error) {
    console.error("Error starting the server", error);
  }
};

startServer();
// program to calculate simple interest
