import React from "react";
import TopicListItem from "./TopicListItem";
import useApplicationData from "hooks/useApplicationData";
import "../styles/TopicList.scss";

const TopicList = ({ onLoadTopic }) => {
  const { state } = useApplicationData();

  return (
    <div className="top-nav-bar__topic-list">
      {state.topicData &&
        state.topicData.map(({ id, slug, title }) => (
          <TopicListItem
            key={id}
            label={title}
            link={`/${slug}`}
            id={id}
            onLoadTopic={onLoadTopic}
          />
        ))}
    </div>
  );
};

export default TopicList;
