import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, onFavPressed }) => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);
 
  // Function to toggle favorited status of a photo
  const toggleFavorite = (photoId) => {
    if (favoritedPhotos.includes(photoId)) {
      setFavoritedPhotos(favoritedPhotos.filter(id => id !== photoId));
    } else {
      setFavoritedPhotos([...favoritedPhotos, photoId]);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar favoritedPhotos={favoritedPhotos}/>
      <PhotoList  photos={photos} favoritedPhotos={favoritedPhotos} toggleFavorite={toggleFavorite} />
    </div>
  );
};

export default HomeRoute;
