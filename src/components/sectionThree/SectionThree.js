import React from 'react';
import './SectionThree.css';
import BigCardList from '../bigCardList/BigCardList'
import ReadingCard from '../readingCard/ReadingCard';
import { readingCardContent } from "../../data/readingData"
import FooterList from '../footerList/FooterList';


const SectionThree = () => {
    return (
        <div className='sectionThreeContainer'>
            <div className="bigCard-container">
                <BigCardList />
            </div>
            <div className = 'sectionThreeRightContainer'>
                <div className="sectionThree-right">
                    {readingCardContent.map((readingContent, index) =>
                        <ReadingCard
                            profileImage={readingContent.profileImage}
                            username={readingContent.username}
                            imageUrl={readingContent.imageUrl}
                            title={readingContent.title}
                            date={readingContent.date}
                            key={index}
                        />)}
                </div>
                <div className='footerContainer'>
                    <FooterList />
                </div>
            </div>
        </div>
    )
}

export default SectionThree;