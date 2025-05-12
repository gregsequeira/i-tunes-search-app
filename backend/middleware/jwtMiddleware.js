const jwt = require("jsonwebtoken");

// Middleware to verify JWT tokens
const jwtMiddleware = (req, res, next) => {
  const jwtToken = req.headers["authorization"];

  // Check for the token
  if (!jwtToken) {
    return res.status(401).send("Access denied: No token provided.");
  }

  // Split the Bearer prefix
  const tokenExtract = jwtToken.split(" ")[1];

  try {
    const payload = jwt.verify(tokenExtract, "HyperionDev");
    req.user = payload;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

module.exports = jwtMiddleware;
