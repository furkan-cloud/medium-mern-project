import React from 'react';
import './TopicCard.css';

const TopicCard = ({topicName}) => {
    return(
        <div className = 'topicCardContainer'>
            <p>{topicName}</p>
            <button className = 'topic_button'>Follow</button>
        </div>
    )
}

export default TopicCard;