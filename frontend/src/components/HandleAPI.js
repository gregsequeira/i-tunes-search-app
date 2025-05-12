import axios from "axios";

// URL for backend server
const API_URL = "http://localhost:8080";

// Fetch search results and use token
export const getSearchResults = async (term, media, token) => {
  const response = await axios.post(
    `${API_URL}/search`,
    { term, media },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.results;
};

export const getToken = async () => {
  const response = await axios.get(`${API_URL}/token`);
  return response.data.token;
};
