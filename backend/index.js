const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

const API_BASE_URL = 'https://apicon-chi.vercel.app';

// Search anime endpoint
app.get('/api/search/:query', async (req, res) => {
  const { query } = req.params;
  try {
    const response = await axios.get(`${API_BASE_URL}/anime/${query}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime data.' });
  }
});

// Anime details endpoint
app.get('/api/details/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${API_BASE_URL}/details/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch anime details.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
