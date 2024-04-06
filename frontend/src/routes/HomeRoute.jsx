import React from 'react';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ topics, onLoadTopic, isFavorited }) => {
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} onLoadTopic={onLoadTopic} isFavorited={isFavorited}/>
      <PhotoList  
          key={photo.id}
          id={photo.id}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.username}
          location={photo.location}
          isFavorited={favoritedPhotos.includes(photo.id)}
          onFavPressed={onFavPressed}/>
    </div>
  );
};

export default HomeRoute;
