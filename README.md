
# Instagram Profile Scraper API

This project provides a simple Express.js API for scraping Instagram profile information. It uses `axios` to make HTTP requests, `cheerio` to parse the HTML, and `express-rate-limit` to limit the number of requests to the API.

## Features

- Scrapes the full name of an Instagram profile based on the provided username.
- Implements rate limiting to prevent abuse.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine.
- An internet connection.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/instagram-profile-scraper.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd instagram-profile-scraper
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

## Usage

1. **Start the server:**

   ```bash
   npm start
   ```

   The server will start and listen on port 3000 by default.

2. **Make a request to the API:**

   You can test the API by sending a GET request to `http://localhost:3000/scrapeProfile` with a query parameter for the Instagram username. For example:

   ```bash
   curl "http://localhost:3000/scrapeProfile?username=instagram"
   ```

   Replace `instagram` with the desired username.

3. **Response:**

   The API will return a JSON object with the full name of the profile:

   ```json
   {
     "fullName": "Instagram"
   }
   ```

   If there is an error, you will receive a 500 status code with an error message.

## Rate Limiting

The API has rate limiting enabled to prevent abuse. Each IP address is limited to 100 requests per 15 minutes. If the limit is exceeded, you will receive the following message:

```json
{
  "message": "Too many requests from this IP, please try again after 15 minutes"
}
```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Axios](https://axios-http.com/) - Promise-based HTTP client for the browser and Node.js
- [Cheerio](https://cheerio.js.org/) - Fast, flexible, and lean implementation of core jQuery designed specifically for the server
- [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit) - Basic rate-limiting middleware for Express
