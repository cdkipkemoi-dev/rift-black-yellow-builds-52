const express = require('express');
const https = require('https');
const path = require('path');
const app = express();

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Ping endpoint to keep the server alive
app.get('/ping', async (req, res) => {
  const url = 'https://yoursitehere.onrender.com'; // Replace with your actual render URL when deployed
  try {
    const response = await new Promise((resolve, reject) => {
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          resolve({ statusCode: 200, body: 'Server pinged successfully' });
        } else {
          reject(new Error(`Server ping failed with status code: ${res.statusCode}`));
        }
      }).on('error', reject);
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// All remaining requests return the React app, so it can handle routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
