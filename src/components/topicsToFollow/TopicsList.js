import React from 'react';
import {Link} from 'react-router-dom';
import TopicCard from '../topicCard/TopicCard';
import './TopicsList.css';

const topics = [
    {
        id: 1,
        topicName: 'Programmer'
    },
    {
        id: 2,
        topicName: 'CoronaVirus'
    },
    {
        id: 3,
        topicName: 'Science'
    },
    {
        id: 4,
        topicName: 'Computer'
    },
]

const TopicsList = () => {
    return (
        <div className='topicListContainer'>
            <h3 className='topicHeader'>TOPICS TO FOLLOW</h3>
            {topics.map((topic) => (
                <TopicCard
                    key={topic.id}
                    topicName={topic.topicName}
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