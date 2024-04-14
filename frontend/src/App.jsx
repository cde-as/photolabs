import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import photos from "mocks/photos";
import topics from "mocks/topics";

import "./App.scss";
// TODO:
// 1. implement the modal log to show this photo details
// 2. implement the modal to show the photo details

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const numFavoritedPhotos = favoritedPhotos.length;

  // Function to toggle favorite state of a photo
  const toggleFavorite = function (id) {
    if (favoritedPhotos.includes(id)) {
      setFavoritedPhotos(favoritedPhotos.filter((fav) => fav !== id));
    } else {
      setFavoritedPhotos([...favoritedPhotos, id]);
    }
  };

  // const selectedPhoto = photos.length > 0 ? photos[0] : null;
  // Function to open the modal when an image is clicked
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

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
