import React, { useState } from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import PhotoDetailsModal from "./PhotoDetailsModal";

import "../styles/HomeRoute.scss";

// TODO
// 1. remove photo details from this component up to App
// 2. take your logic for leveraging that component and put it up in app
// 3. clean up here. Only Photolist and Top Nav should be in here.

const HomeRoute = ({
  photos,
  topics,
  setDisplayModal,
  favoritedPhotos,
  toggleFavorite,
  displayAlert,
  openModal,
  numFavoritedPhotos,
  setSelectedTopic,
  onLoadTopic,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        displayAlert={displayAlert}
        numFavoritedPhotos={numFavoritedPhotos}
        setSelectedTopic={setSelectedTopic}
        onLoadTopic={onLoadTopic}
      />

      <PhotoList
        photos={photos.map((photo) => ({
          ...photo,
          similar_photos: photo.similar_photos,
        }))}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        setDisplayModal={setDisplayModal}
        openModal={openModal} // Pass openModal function to PhotoList
      />
    </div>
  );
};

export default HomeRoute;
