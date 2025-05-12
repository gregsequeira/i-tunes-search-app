import React, { useState } from "react";
import "../css/UserSearchBar.css";

// Input field and media type selection
const SearchBar = ({ onSearch, onEmptySearch }) => {
  const [term, setTerm] = useState("");
  const [media, setMedia] = useState("all");

  //   handle submission and trigger modal if input is empty
  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term, media);
    } else {
      onEmptySearch();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter an album or artist to search..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <select value={media} onChange={(e) => setMedia(e.target.value)}>
        <option value="all">All</option>
        <option value="movie">Movie</option>
        <option value="podcast">Podcast</option>
        <option value="music">Music</option>
        <option value="audiobook">Audiobook</option>
        <option value="shortFilm">Short Film</option>
        <option value="tvShow">TV Show</option>
        <option value="software">Software</option>
        <option value="ebook">eBook</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
