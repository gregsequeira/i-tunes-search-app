const axios = require("axios");

// Controller function to handle iTunes search
const searchiTunes = async (req, res) => {
  const { term, media } = req.body;

  // Validate user's search term
  if (!term) {
    return res.status(400).json({ error: "Search term is required" });
  }

  // Set default media type if not provided
  const mediaType = media || "all";

  // Make the iTunes API URL
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(
    term
  )}&media=${mediaType}&limit=10`;

  try {
    // Fetch data from iTunes API
    const response = await axios.get(url);
    const data = response.data;

    // Format the results for the front end
    const results = data.results.map((item) => ({
      albumName: item.collectionName || "N/A",
      albumCover: item.artworkUrl100 || "N/A",
      releaseDate: item.releaseDate || "N/A",
    }));

    // Send formatted results to the front end
    res.json({ results });
  } catch (error) {
    // Handle fetch errors
    res.status(500).json({ error: "Failed to fetch data from iTunes API" });
  }
};

module.exports = { searchiTunes };
