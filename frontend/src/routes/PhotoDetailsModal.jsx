import React from 'react';

import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';
import photos from '../mocks/photos';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, onFavPressed, photo, favoritedPhotos, isFavorited }) => {

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
      <PhotoFavButton onFavPressed={onFavPressed}/>
      <img className='photo-details-modal__image' src={photo.imageSource}></img>
      

      <div className="photo-list__user-details">

            <img className="photo-list__user-profile" src={photo.profile} alt={`Profile of ${photo.username}`} />

            <div className="photo-list__user-info">
              <h2 className="photo-list__username">{photo.username}</h2>
                <div className="photo-list__user-location">
                  <p>{photo.location.city}, {photo.location.country}</p>
                </div>
            </div>

          </div>

          <div className="photo-details-modal__header">
                Similar Photos
            </div>
            <div className="photo-details-modal__images">
              <PhotoList photos={photo.similar_photos}/>    
            </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;