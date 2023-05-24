// Write some code that will tell the server to disply react app when user goes to home page
require('dotenv').config();
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');


const app = express();
const PORT = process.env.PORT || 3001;


// Have Node serve the files for built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());

// If React App makes GET request to the route, respond with a res with our JSON data.
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

  // Create a Nodemailer transporter using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Setup email data
  const mailOptions = {
    from: process.env.EMAIL_USERNAME,
    to: process.env.EMAIL_USERNAME, // Change this to the recipient email address
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log('Email sent');
    res.sendStatus(200);
  } catch (error) {
    console.error('Error sending email:', error);
    res.sendStatus(500);
  }
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// This code will first allow Node to access our built React project using the express.static function for static files
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
