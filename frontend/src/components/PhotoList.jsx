import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";
import "../styles/PhotoList.scss";


const PhotoList = ({ favoritedPhotos = [], toggleFavorite, openModal, }) => {
  console.log('photos:', photos);
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
          toggleFavorite={toggleFavorite}
          openModal={openModal}  
          similarPhotos={photo.similar_photos}
        />
      )}
    </ul>
  );
};

export default PhotoList;
