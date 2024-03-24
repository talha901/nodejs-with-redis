// server.js

const express = require('express');
const app = express();
const port = process.env.PORT || 80;

// Define the health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('api is running ... healthy');
});

// Define the root endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
