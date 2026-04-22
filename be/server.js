import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { randomUUID } from "crypto";
import path from "path";
import { fileURLToPath } from "url";
import { sendInquiryEmail, sendContactEmail } from "./email_service.js";

// Load environment variables
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env") });

// MongoDB connection
const mongoUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;
const client = new MongoClient(mongoUrl);
let db;

// Create Express app
const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGINS
      ? process.env.CORS_ORIGINS.split(",")
      : "*",
    credentials: true,
    methods: ["*"],
    allowedHeaders: ["*"],
  })
);

// Configure logging
function logger(req, _res, next) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - ${req.method} ${req.path}`);
  next();
}
app.use(logger);

// ─── Validation helpers ───────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateInquiry(body) {
  const errors = [];
  if (!body.parentName) errors.push("parentName is required");
  if (!body.childName) errors.push("childName is required");
  if (!body.childAge) errors.push("childAge is required");
  if (!body.program) errors.push("program is required");
  if (!body.email) errors.push("email is required");
  else if (!EMAIL_REGEX.test(body.email)) errors.push("Invalid email format");
  if (!body.phone) errors.push("phone is required");
  return errors;
}

function validateContact(body) {
  const errors = [];
  if (!body.name) errors.push("name is required");
  if (!body.email) errors.push("email is required");
  else if (!EMAIL_REGEX.test(body.email)) errors.push("Invalid email format");
  if (!body.phone) errors.push("phone is required");
  if (!body.subject) errors.push("subject is required");
  if (!body.message) errors.push("message is required");
  return errors;
}

// ─── API Routes (/api) ───────────────────────────────────────────────

const router = express.Router();

// GET /api/
router.get("/", (_req, res) => {
  res.json({ message: "Hello World" });
});

// POST /api/status
router.post("/status", async (req, res) => {
  try {
    const { client_name } = req.body;
    if (!client_name) {
      return res.status(422).json({ detail: "client_name is required" });
    }

    const statusObj = {
      id: randomUUID(),
      client_name,
      timestamp: new Date().toISOString(),
    };

    await db.collection("status_checks").insertOne(statusObj);

    // Return without MongoDB's _id
    const { _id, ...result } = statusObj;
    res.json(result);
  } catch (error) {
    console.error(`Error creating status check: ${error.message}`);
    res.status(500).json({ detail: "Internal server error" });
  }
});

// GET /api/status
router.get("/status", async (_req, res) => {
  try {
    const statusChecks = await db
      .collection("status_checks")
      .find({}, { projection: { _id: 0 } })
      .limit(1000)
      .toArray();

    res.json(statusChecks);
  } catch (error) {
    console.error(`Error fetching status checks: ${error.message}`);
    res.status(500).json({ detail: "Internal server error" });
  }
});

// POST /api/submit-inquiry
router.post("/submit-inquiry", async (req, res) => {
  const errors = validateInquiry(req.body);
  if (errors.length > 0) {
    return res.status(422).json({ detail: errors });
  }

  try {
    const inquiryDoc = {
      ...req.body,
      id: randomUUID(),
      timestamp: new Date().toISOString(),
    };

    await db.collection("inquiries").insertOne(inquiryDoc);

    // Send email notification (non-blocking — don't fail the request if email fails)
    try {
      await sendInquiryEmail(req.body);
      console.log(`Inquiry submitted and email sent successfully from ${req.body.email}`);
    } catch (emailError) {
      console.error(`Inquiry saved but email failed: ${emailError.message}`);
    }

    res.json({
      status: "success",
      message:
        "Your inquiry has been submitted successfully! We will contact you soon.",
    });
  } catch (error) {
    console.error(`Error submitting inquiry: ${error.message}`);
    res.json({
      status: "error",
      message:
        "Failed to submit inquiry. Please try again or contact us directly.",
    });
  }
});

// POST /api/submit-contact
router.post("/submit-contact", async (req, res) => {
  const errors = validateContact(req.body);
  if (errors.length > 0) {
    return res.status(422).json({ detail: errors });
  }

  try {
    const contactDoc = {
      ...req.body,
      id: randomUUID(),
      timestamp: new Date().toISOString(),
    };

    await db.collection("contacts").insertOne(contactDoc);

    // Send email notification (non-blocking — don't fail the request if email fails)
    try {
      await sendContactEmail(req.body);
      console.log(`Contact form submitted and email sent successfully from ${req.body.email}`);
    } catch (emailError) {
      console.error(`Contact saved but email failed: ${emailError.message}`);
    }

    res.json({
      status: "success",
      message:
        "Your message has been sent successfully! We will get back to you soon.",
    });
  } catch (error) {
    console.error(`Error submitting contact: ${error.message}`);
    res.json({
      status: "error",
      message:
        "Failed to send message. Please try again or contact us directly.",
    });
  }
});

// Mount router at /api
app.use("/api", router);

// ─── Start server ─────────────────────────────────────────────────────

const PORT = process.env.PORT || 8001;

async function start() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log("✓ Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`✓ Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`✗ Failed to start server: ${error.message}`);
    process.exit(1);
  }
}

// Graceful shutdown
process.on("SIGINT", async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await client.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

start();
