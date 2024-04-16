import React from "react";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";
import FavIcon from "./FavIcon";

const TopNavigation = ({ topics, onLoadTopic, numFavoritedPhotos }) => {
  
  const displayAlert = numFavoritedPhotos > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <TopicList topics={topics} onLoadTopic={onLoadTopic} />

      <FavIcon selected={true} displayAlert={displayAlert} />
    </div>
  );
};

export default TopNavigation;
