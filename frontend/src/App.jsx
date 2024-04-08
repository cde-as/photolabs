import React, { useState } from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import photos from 'mocks/photos';
import topics from 'mocks/topics';

import './App.scss';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [displayModal, setDisplayModal] = useState(false); 
  return (
    <div className="App">

      <HomeRoute 
      photos={photos} 
      topics={topics} 
      setDisplayModal={setDisplayModal} 
      //favoritedPhotos={favoritedPhotos} 
      //onFavPressed={onFavPressed}
      />

      {displayModal && <PhotoDetailsModal onClose={() => setDisplayModal(false)} />}
    </div>
  );
};

export default App;
