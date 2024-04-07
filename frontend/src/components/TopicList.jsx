import React from 'react';
import TopicListItem from './TopicListItem';
import topics from 'mocks/topics';
import '../styles/TopicList.scss';

const TopicList = ({ topics, onLoadTopic }) => (

  <div className="top-nav-bar__topic-list">
    {topics.map(({ id, slug, title})=> (
        
        <TopicListItem 
        key={id} 
        label={title} 
        link={`/${slug}`} 
        id={id} 
        onLoadTopic={onLoadTopic}
        />
      ))
    }
  </div>
)

export default TopicList