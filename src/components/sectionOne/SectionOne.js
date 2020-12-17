import React from 'react';
import Navbar from '../navbar/Navbar';
import FollowList from '../followList/FollowList';
import TopicsList from '../topicsToFollow/TopicsList';
import MainCard from '../mainCard/MainCard';
import CardList from '../cardList/CardList';
import './SectionOneCard.css';

const SectionOne = () => {
    return(
        <div className = 'sectionOneContainer'>
            <MainCard/>
            <CardList/>
            <div>
                <FollowList/>
                <TopicsList/>
            </div>
        </div>
    )
}

export default SectionOne;