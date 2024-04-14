import React, { useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({
  photoId,
  imageSource,
  profile,
  username,
  location,
  favoritedPhotos,
  toggleFavorite,
  openModal,
}) => {
  
  // Function to handle image click
  const handleImageClick = () => {
    openModal({
      photoId,
      imageSource,
      profile,
      username,
      location,
    });
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        toggleFavorite={toggleFavorite}
        favoritedPhotos={favoritedPhotos}
        photoId={photoId}
      />

      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo by ${username}`}
        onClick={handleImageClick}
      />

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`Profile of ${username}`}
        />
      
        <div className="photo-list__user-info">

          <h2 className="photo-list__username">{username}</h2>
          
          <div className="photo-list__user-location">
            <p>
              {location.city}, {location.country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
