import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

import "./App.scss";

const App = () => {
  const {
    state,
    toggleFavorite,
    openModal,
    closeModal,
    numFavoritedPhotos,
    setSelectedTopic,
    onLoadTopic,
  } = useApplicationData();

  const { displayModal, favoritedPhotos, selectedPhoto, similarPhotos } = state;

  console.log("Similar Photos", similarPhotos, state.similarPhotos);
  console.log("Selected Photos", selectedPhoto?.similar_photos);
  return (
    <div className="App">
      <HomeRoute
        photos={state.photoData}
        topics={state.topicData}
        favoritedPhotos={favoritedPhotos}
        toggleFavorite={toggleFavorite}
        openModal={openModal}
        numFavoritedPhotos={numFavoritedPhotos}
        setSelectedTopic={setSelectedTopic}
        onLoadTopic={onLoadTopic}
      />

      {displayModal && (
        <PhotoDetailsModal
          onClose={() => closeModal()}
          photo={selectedPhoto}
          favoritedPhotos={favoritedPhotos}
          toggleFavorite={toggleFavorite}
          similarPhotos={similarPhotos}
        />
      )}
    </div>
  );
};

export default App;
