// Write some code that will tell the server to disply react app when user goes to home page
require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using your Gmail account credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Configure the email details
  const mailOptions = {
    from: "your-gmail-account@gmail.com",
    to: "your-gmail-account@gmail.com",
    subject: "New Contact Form Submission",
    text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "An error occurred while sending the email." });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully!" });
    }
  });
});

// Have Node serve the files for built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// If React App makes GET request to the route, respond with a res with our JSON data.
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// This code will first allow Node to access our built React project using the express.static function for static files
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
