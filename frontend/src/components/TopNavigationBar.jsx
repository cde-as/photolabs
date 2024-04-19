import React from "react";
import TopicList from "./TopicList";
import FavIcon from "./FavIcon";
import "../styles/TopNavigationBar.scss";
import useApplicationData from "hooks/useApplicationData";

const TopNavigation = ({ topics, onLoadTopic, numFavoritedPhotos, setSelectedTopic }) => {
  
  const displayAlert = numFavoritedPhotos > 0;

  const handleLoadTopic = (id) => {
    setSelectedTopic(id);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>

      <TopicList topics={topics} onLoadTopic={handleLoadTopic} />

      <FavIcon selected={true} displayAlert={displayAlert} />
    </div>
  );
};

export default TopNavigation;
