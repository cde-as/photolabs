import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, onFavPressed }) => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const [displayAlert, setDisplayAlert] = useState(false); // State to manage displayAlert
 
  // Function to toggle favorited status of a photo
  const toggleFavorite = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter(id => id !== photoId));
      setDisplayAlert(false); // Update displayAlert to false when unfavoriting a photo
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
      setDisplayAlert(true); // Update displayAlert to true when favoriting a photo
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar favoritedPhotos={favoritedPhotos} displayAlert={displayAlert}/>
      <PhotoList  photos={photos} favoritedPhotos={favoritedPhotos} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;
