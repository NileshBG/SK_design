const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact Form Received:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Respond to client
  res.send(`
    <h2>Thank You, ${name}!</h2>
    <p>Your message has been received.</p>
    <a href="/">Go back to homepage</a>

  `);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
    console.log('Visit http://localhost:3000 to access the form.');
    

}
);
