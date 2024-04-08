import React from 'react';

import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, onFavPressed, photo}) => {

  return (
    <div className="photo-details-modal" onClick={onClose}>
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
      <PhotoFavButton onFavPressed={onFavPressed}/>
      <img className='photo-details-modal__image' src={photo.imageSource}></img>

      </div>
    </div>
  )
};

export default PhotoDetailsModal;