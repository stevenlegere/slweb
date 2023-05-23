// Write some code that will tell the server to disply react app when user goes to home page
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Have Node serve the files for built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// If React App makes GET request to the route, respond with a res with our JSON data.
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// This code will first allow Node to access our built React project using the express.static function for static files
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
