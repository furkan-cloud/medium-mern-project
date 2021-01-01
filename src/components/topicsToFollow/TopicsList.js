import React from 'react';
import {Link} from 'react-router-dom';
import TopicCard from '../topicCard/TopicCard';
import './TopicsList.css';
import {topics} from '../../data/topicData' 




const TopicsList = () => {
    return (
        <div className='topicListContainer'>
            <h3 className='topicHeader'>TOPICS TO FOLLOW</h3>
            {topics.slice(0,5).map((topic) => (
                <TopicCard
                    key={topic}
                    topicName={topic}
                />
            ))}
            <Link
                style={{ color: '#1a8917', textDecoration: 'none' }}
                to='/'
                onClick={() => { }}
            >
                See More
            </Link>
        </div>
    )
}

export default TopicsList;