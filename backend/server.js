const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

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

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));