import React, { useState } from 'react';
import PhotoListItem from './components/PhotoListItem';
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


  const sampleDataForPhotoListItem = [
    {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  
    {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  
    {
    id: "3",
    location: {
      "city": "Ottawa",
      "country": "Canada"
      },
      imageSource: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
      username: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    }
  ];

  return (
    <div className="App">
      <div className="photo-list">
        {sampleDataForPhotoListItem.map(photoData => (
            <PhotoListItem 
            key={photoData.id}
            id={photoData.id}
            imageSource={photoData.imageSource}
            profile={photoData.profile}
            username={photoData.username}
            location={photoData.location}
            isFavorited={favoritedPhotos.includes(photoData.id)}
            onFavPressed={onFavPressed}
            />
        ))}
      </div>

    </div>
  );
};

export default App;
