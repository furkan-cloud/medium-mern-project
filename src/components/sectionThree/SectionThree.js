import React from 'react';
import './SectionThree.css';
import BigCardList from '../bigCardList/BigCardList'


const SectionThree = () => {
    return(
        <div className = 'sectionThreeContainer'>
            <div className="bigCard-container">
                <BigCardList/>
            </div>
            <div className="sectionThree-right">help</div>
        </div>
    )
}

export default SectionThree;