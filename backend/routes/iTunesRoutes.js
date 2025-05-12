const express = require("express");
const jwtMiddleware = require("../middleware/jwtMiddleware");
const { searchiTunes } = require("../controllers/iTunesController");

const router = express.Router();

// iTunes search route with JWT validation
router.post("/search", jwtMiddleware, searchiTunes);

module.exports = router;
