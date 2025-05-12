import React from "react";
import { Row } from "react-bootstrap";
import ResultCard from "./ResultCard";
import "../css/ResultsList.css";

// Sow results and pass favourites for button change
const ResultsList = ({
  results,
  onAddToFavourites,
  onRemoveFromFavourites,
  favourites,
}) => {
  return (
    <Row>
      {results.map((result, index) => (
        <ResultCard
          key={index}
          result={result}
          onAddToFavourites={onAddToFavourites}
          onRemoveFromFavourites={onRemoveFromFavourites}
          favourites={favourites}
        />
      ))}
    </Row>
  );
};

export default ResultsList;
