import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

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

      <HomeRoute 
      photos={photos} 
      topics={topics} 
      favoritedPhotos={favoritedPhotos} 
      onFavPressed={onFavPressed}/>

    </div>
  );
};

export default App;
