const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Contact route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Request received");

  try {
    console.log("Before sending mail");

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL,
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    console.log("After sending mail");

    res.status(200).json({ success: true });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});