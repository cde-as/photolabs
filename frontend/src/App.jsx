import React, { useState } from 'react';
//import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
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
      <div className="photo-list">
      <PhotoList favoritedPhotos={favoritedPhotos} onFavPressed={onFavPressed}/>

      </div>

    </div>
  );
};

export default App;
