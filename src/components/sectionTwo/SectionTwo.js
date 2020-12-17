import React from 'react';
import './SectionTwo.css'
import TrendingCardList from '../../components/trendingCardList/TrendingCardList'



const SectionTwo = () => {
    return(
        <div className = 'sectionTwoContainer'>
            <div className="trendingCard-container">
                <TrendingCardList/>
            </div>
        </div>
    )
}

export default SectionTwo;
