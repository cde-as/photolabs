import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, onLoadTopic, }) => {
  const isFavorited = true;

  return (  
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
        <TopicList topics={topics} onLoadTopic={onLoadTopic}/>
        
          <FavBadge isFavorited={isFavorited}/>
         
  
    </div>
  )
}

export default TopNavigation;