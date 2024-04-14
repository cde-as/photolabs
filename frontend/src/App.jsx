import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
import photos from "mocks/photos";
import topics from "mocks/topics";


import "./App.scss";
// TODO:
// 1. implement the modal log to show this photo details
// 2. implement the modal to show the photo details

// Note: Rendering a single component to build components in isolation
const App = () => {

  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    
    
  } = useApplicationData();

  const { displayModal, favoritedPhotos, selectedPhoto, numFavoritedPhotos, toggleFavorite, openModal, setDisplayModal } = state;

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setDisplayModal={setDisplayModal}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
        numFavoritedPhotos={numFavoritedPhotos}
      />

      {displayModal && (
        <PhotoDetailsModal
          onClose={() => setDisplayModal(false)}
          photo={selectedPhoto}
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;
