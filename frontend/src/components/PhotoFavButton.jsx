import React, { useCallback } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ onFavPressed, isFavorited }) {
    const onPressFav = useCallback(() => {
        onFavPressed();
    }, [onFavPressed]);

    console.log("Favorite button clicked");
    console.log("isFavorited:", isFavorited);

    return (
        <div className="photo-list__fav-icon" onClick={onPressFav}>
            <div className="photo-list__fav-icon-svg">
                <FavIcon
                    width={20}
                    height={17}
                    outlineWidth={1}
                    displayAlert={isFavorited}  // Pass isFavorited as displayAlert
                    selected={isFavorited}   
                />
            </div>
        </div>
    );
}

export default PhotoFavButton;