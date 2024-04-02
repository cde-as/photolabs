import React from "react";

import "../styles/PhotoListItem.scss";


const PhotoListItem = (props) => {
  const { id, location, imageSource, username, profile } = props.data;

  return (
    <div className="photo-list-item">
      <img src={imageSource} alt={`Photo ny ${username}`} />
      <div className="details">
        <h2>{username}</h2>
        <p>
          {location.city}, {location.country}
        </p>
      </div>
      <img className="profile" src={profile} alt={`Profile of ${username}`} />
    </div>
  );
};

export default PhotoListItem;
