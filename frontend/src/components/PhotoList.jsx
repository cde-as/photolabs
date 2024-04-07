import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";
import "../styles/PhotoList.scss";


const PhotoList = ({  photos, favoritedPhotos, toggleFavorite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => 
        <PhotoListItem 
          key={photo.id}
          id={photo.id}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          location={photo.location}
          isFavorited={favoritedPhotos.includes(photo.id)}
          //onFavPressed={onFavPressed}
          toggleFavorite={toggleFavorite}
          onClick={() => openModal(photo)}
        />
      )}
    </ul>
  );
};

export default PhotoList;
