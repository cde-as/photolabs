import React, { useEffect, useState } from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({
  favoritedPhotos,
  toggleFavorite,
  openModal,
  photos = [],
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        return (
          <PhotoListItem
            key={photo.id}
            photoId={photo.id}
            imageSource={photo.urls.regular}
            profile={photo.user.profile}
            username={photo.user.name}
            location={photo.location}
            favoritedPhotos={favoritedPhotos}
            toggleFavorite={toggleFavorite}
            openModal={openModal}
            similarPhotos={photo.similar_photos}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
