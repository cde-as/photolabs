import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const [displayAlert, setDisplayAlert] = useState(false); // State to manage displayAlert
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal visibility
  const [selectedPhoto, setSelectedPhoto] = useState(null); // State to manage the selected photo
 
  // Function to toggle favorited status of a photo
  const toggleFavorite = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter(id => id !== photoId));

      // Update displayAlert based on remaining favorited photos
      setDisplayAlert(favoritedPhotos.length > 1);
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
      setDisplayAlert(true); // Update displayAlert to true when favoriting a photo
    }
  };

    // Function to handle opening the modal and setting the selected photo
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };
  
  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} displayAlert={displayAlert}/>
      <PhotoList  photos={photos} favoritedPhotos={favoritedPhotos} toggleFavorite={toggleFavorite} openModal={openModal} />

      {isModalOpen && selectedPhoto && (
        <PhotoDetailsModal photo={selectedPhoto} onClose={closeModal} />
      )}
    </div>
  );
};

export default HomeRoute;
