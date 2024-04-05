import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = ({ id, label, link, onLoadTopic }) => (
  <div className="topic-list__item" onClick={() => onLoadTopic(id)}>
    <span href={ link }>{ label }</span>
  </div>
)

// Note: Use `.defaultProps` when building components in isolation
TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  // TODO: We don't need a link.
  link: 'insert link' 
}

export default TopicListItem;
