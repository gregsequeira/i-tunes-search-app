import React from "react";
import "../css/Favourites.css";

const Favourites = ({ favourites, onRemoveFromFavourites }) => {
  return (
    <div className="favourites">
      <h2>Favourites</h2>
      {/* map() the list of favourites */}
      {favourites.length > 0 ? (
        favourites.map((item, index) => (
          <div key={index} className="favourite-item">
            <img src={item.albumCover} alt={item.albumName} />
            <h4>{item.albumName}</h4>
            {/* Allow users to remove from the list */}
            <button onClick={() => onRemoveFromFavourites(item)}>Remove</button>
          </div>
        ))
      ) : (
        <p>No favourites added yet!</p>
      )}
    </div>
  );
};

export default Favourites;
