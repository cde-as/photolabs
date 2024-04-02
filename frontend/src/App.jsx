import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

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

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">

      <div className="photo-list">
      {sampleDataForPhotoListItem.map(photoData => (
          <PhotoListItem key={photoData.id} data={photoData} photoId={photoData.id} />
      ))}
      </div>

    </div>
  );
};

export default App;
