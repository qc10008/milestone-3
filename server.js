const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static HTML pages (index.html, about.html, contact.html)
app.use(express.static('public'));

// Endpoint to handle form submission from contact.html
app.post('/submit-form', (req, res) => {
    const { email, message } = req.body;
    console.log(`Received submission - Email: ${email}, Message: ${message}`);
    res.send('Thank you for your message!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
