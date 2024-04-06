import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ favoritedPhotos, onFavPressed }) => {
  return (
    <div className="home-route">
      <TopNavigationBar/>
      <PhotoList favoritedPhotos={favoritedPhotos} onFavPressed={onFavPressed} />
    </div>
  );
};

export default HomeRoute;
