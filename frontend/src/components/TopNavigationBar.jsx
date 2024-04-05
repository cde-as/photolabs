import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, onLoadTopic, }) => {
  const isFavorited = true;

  return (  
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__topic-list">
        <TopicList topics={topics} onLoadTopic={onLoadTopic}/>
        <div className="top-nav-bar__fav-badge">
          <FavBadge isFavorited={isFavorited}/>
         
        </div>
      </div>
    </div>
  )
}

export default TopNavigation;