import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.data;
  const { photoId } = props;

  return (
    <div className="photo-list__item" key={photoId}>
      <img src={imageSource} alt={`Photo ny ${username}`} />
      
      <div className="photo-list__user-info photo-list__user-details">
      <img className="photo-list__user-profile" src={profile} alt={`Profile of ${username}`} />
       
        <h2 className="photo-list__user-info photo-list__user-details">{username}</h2>

        <div className="photo-list__user-location">
          <p>
            {location.city}, {location.country}
          </p>
        </div>

      </div>
    </div>
  );
};

export default PhotoListItem;
