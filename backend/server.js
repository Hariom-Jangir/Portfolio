const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Backend is running ");
});

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Request received");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    console.log("Before sending mail");

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      replyTo: email,
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});