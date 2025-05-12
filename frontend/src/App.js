import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Modal, Button } from "react-bootstrap";
import SearchBar from "./components/UserSearchBar";
import ResultsList from "./components/ResultsList";
import Favourites from "./components/Favourites";
import { getSearchResults, getToken } from "./components/HandleAPI";
import "./App.css";
import "./css/SearchModal.css";

function App() {
  const [results, setResults] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [token, setToken] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showEmptySearchModal, setShowEmptySearchModal] = useState(false);

  // fetch jwt token
  useEffect(() => {
    const fetchToken = async () => {
      const newToken = await getToken();
      setToken(newToken);
      console.log(`Token: ${newToken}`);
    };
    fetchToken();
  }, []);

  // handle search and open modal if empty input
  const handleSearch = async (term, media) => {
    console.log(`Searching for: ${term} with media type: ${media}`);
    const searchResults = await getSearchResults(term, media, token);
    setResults(searchResults);
    if (searchResults.length === 0) {
      setShowModal(true);
    }
  };

  const addToFavourites = (item) => {
    setFavourites((prevFavourites) => {
      if (!prevFavourites.includes(item)) {
        return [...prevFavourites, item];
      }
      return prevFavourites;
    });
  };

  const removeFromFavourites = (item) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((fav) => fav !== item)
    );
  };

  // close modals
  const handleCloseModal = () => setShowModal(false);
  const handleCloseEmptySearchModal = () => setShowEmptySearchModal(false);

  return (
    <Container className="app">
      <h1>iTunes Media Search</h1>
      <SearchBar
        onSearch={handleSearch}
        onEmptySearch={() => setShowEmptySearchModal(true)}
      />
      <ResultsList
        results={results}
        onAddToFavourites={addToFavourites}
        onRemoveFromFavourites={removeFromFavourites}
        favourites={favourites}
      />
      <Favourites
        favourites={favourites}
        onRemoveFromFavourites={removeFromFavourites}
      />

      {/* Modal for no results found */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>No Results Found</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sorry, no results were found for your search. Please try again with a
          different artist, album or media type.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for empty search term */}
      <Modal show={showEmptySearchModal} onHide={handleCloseEmptySearchModal}>
        <Modal.Header closeButton>
          <Modal.Title>Empty Search Term</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please enter an album or artist name in the search field. Also,
          remember to use the dropdown menu if you want to narrow down your
          search by media type.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseEmptySearchModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
