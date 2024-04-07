import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics }) => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
  const [displayAlert, setDisplayAlert] = useState(false); // State to manage displayAlert
 
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

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} displayAlert={displayAlert}/>
      <PhotoList  photos={photos} favoritedPhotos={favoritedPhotos} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;
