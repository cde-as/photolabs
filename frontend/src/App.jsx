import React, { useState } from 'react';
import PhotoList from './components/PhotoList';
import TopNavigationBar from './components/TopNavigationBar';
//import TopicList from 'components/TopicList';

import './App.scss';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favoritedPhotos, setFavoritedPhotos] = useState([]);

  const onFavPressed = (photoId) => {
    setFavoritedPhotos(prevPhotos => {
      if (prevPhotos.includes(photoId)) {
        // If already favorited, remove it from the list
        return prevPhotos.filter(id => id !== photoId);
      } else {
        // If not favorited, add it to the list
        return [...prevPhotos, photoId];
      }
    });
  };


  return (
    <div className="App">
      <TopNavigationBar/>

      <div className="photo-list">
      <PhotoList favoritedPhotos={favoritedPhotos} onFavPressed={onFavPressed}/>
      </div>

    </div>
  );
};

export default App;
