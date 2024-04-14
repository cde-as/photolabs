import React, { useCallback } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
function PhotoFavButton({  toggleFavorite, favoritedPhotos, photoId }) {
    
    const toggleFav = () => {
        toggleFavorite(photoId);
}

    const colorCheck = favoritedPhotos?.includes(photoId);


    return (
        <div className="photo-list__fav-icon" onClick={toggleFav}>
            <div className="photo-list__fav-icon-svg">
                <FavIcon
                    width={20}
                    height={17}
                    outlineWidth={1}
                    selected={colorCheck}   
                    displayAlert={false}
                />
            </div>
        </div>
    );
}

export default PhotoFavButton;