require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const itunesRoutes = require("./routes/iTunesRoutes");

const app = express();
const PORT = process.env.PORT || 8080;
const SECRET_KEY = process.env.SECRET_KEY;

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// Middleware for CORS configuration
app.use(cors({ origin: "http://localhost:3000" }));

// Generate a JWT for API access
app.get("/token", (req, res) => {
  const payload = { app: "itunes-search" };
  const token = jwt.sign(JSON.stringify(payload), SECRET_KEY, {
    algorithm: "HS256",
  });
  res.json({ token });
});

// Apply routes
app.use("/", itunesRoutes);

// Test route to verify server is running
app.get("/", (req, res) => {
  res.send("iTunes Search API Back-End");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
