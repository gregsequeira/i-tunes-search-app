import React, { useState, useEffect } from "react";
import { Card, Button, Col } from "react-bootstrap";
import "../css/ResultCard.css";

const ResultCard = ({
  result,
  onAddToFavourites,
  onRemoveFromFavourites,
  favourites,
}) => {
  // State to track if the item is in favourites
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    // Check if the item is already in favourites
    const favouriteItem = favourites.find(
      (fav) => fav.albumName === result.albumName
    );
    if (favouriteItem) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [favourites, result.albumName]);

  // Handle button click
  const handleFavouriteClick = () => {
    if (isFavourite) {
      onRemoveFromFavourites(result);
    } else {
      onAddToFavourites(result);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    // use bootstrap Cards
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img
          variant="top"
          src={result.albumCover}
          alt={result.albumName}
        />
        <Card.Body>
          <Card.Title>{result.albumName}</Card.Title>
          <Card.Text>{new Date(result.releaseDate).toDateString()}</Card.Text>
          <Button
            variant={isFavourite ? "danger" : "primary"}
            onClick={handleFavouriteClick}
          >
            {isFavourite ? "Favourite" : "Add to Favourites"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ResultCard;
