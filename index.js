const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const rateLimit = require('express-rate-limit');
const app = express();

// Define rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

// Apply the rate limiting middleware to the /scrapeProfile endpoint
app.use('/scrapeProfile', limiter);

app.get('/scrapeProfile', async (req, res) => {
  try {
    const { username } = req.query;
    const url = `https://www.instagram.com/${username}/`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    
    // Scrape data (Example: full name)
    const fullName = $('meta[property="og:title"]').attr('content');
    
    // Print the name to the console
    console.log(`Full name: ${fullName}`);

    // Send the name as a JSON response
    res.json({ fullName });
  } catch (error) {
    console.error('Failed to scrape profile:', error);
    res.status(500).json({ error: 'Failed to scrape profile' });
  }
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});
