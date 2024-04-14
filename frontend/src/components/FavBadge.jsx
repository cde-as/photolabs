import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavorited }) => {
  return (
    <div className='fav-badge'>
      <FavIcon selected={isFavorited} />
    </div>
  ) 
};

export default FavBadge;