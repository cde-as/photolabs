import React from "react";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos";
import "../styles/PhotoList.scss";


const PhotoList = ({ favoritedPhotos, toggleFavorite, openModal, }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => 
        <PhotoListItem 
          key={photo.id}
          photoId={photo.id}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.name}
          location={photo.location}
          favoritedPhotos={favoritedPhotos}
           toggleFavorite={ toggleFavorite}
          openModal={openModal}  
          similarPhotos={photo.similar_photos}
        />
      )}
    </ul>
  );
};

export default PhotoList;
