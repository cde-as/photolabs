import React, { useState } from 'react';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ id, imageSource, profile, username, location, isFavorited, toggleFavorite}) => {

  // Function to handle favorite icon click
  const handleFavoriteClick = () => {
    toggleFavorite(id); // Call toggleFavorite with photo id
  };

console.log("isFavorited:", isFavorited);

    return (
        <div className="photo-list__item" >
            <PhotoFavButton onFavPressed={() => toggleFavorite(id)} isFavorited={isFavorited} />

            <img className="photo-list__image" src={imageSource} alt={`Photo by ${username}`} />

            <div className="photo-list__user-details">

                <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />

                <div className="photo-list__user-info">

                    <h2 className="photo-list__username">{username}</h2>
                    <div className="photo-list__user-location">
                        <p>{location.city}, {location.country}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default PhotoListItem;