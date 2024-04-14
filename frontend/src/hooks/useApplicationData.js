import { useState } from "react";

const useApplicationData = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const numFavoritedPhotos = favoritedPhotos.length;

  const toggleFavorite = function (id) {
    if (favoritedPhotos.includes(id)) {
      setFavoritedPhotos(favoritedPhotos.filter((fav) => fav !== id));
    } else {
      setFavoritedPhotos([...favoritedPhotos, id]);
    }
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  return {
    state: {
      displayModal,
      favoritedPhotos,
      selectedPhoto,
      numFavoritedPhotos,
      setDisplayModal,
      toggleFavorite,
      openModal
    },
    updateToFavPhotoIds: toggleFavorite,
    setPhotoSelected: setSelectedPhoto,
    onClosePhotoDetailsModal: closeModal,
  
  };
};

export default useApplicationData;