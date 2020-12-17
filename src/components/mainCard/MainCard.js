import React from 'react';
import './MainCard.css';

const MainCard = () => {
    return (
        <div className="maincard-container">
            <div className="main-image-container">
                <img className="main-image" src='https://miro.medium.com/fit/c/376/282/0*SZ9hlfia03wfgsth.jpg' alt='' />
            </div>

            <div className="main-text-container">
                <div className="main-username">
                    <img src = 'https://miro.medium.com/fit/c/20/20/1*U6oowcH4fc_jKALXYqbtxQ.png'  width="10" height="10"></img>
                    Nur KOcar
                </div>

                <div className="main-title">10 Free React Native Courses for Beginners to Learn in 2021</div>
                <div>There is a huge demand for cross-platform app frameworks like React Native and Flutter which allows you to create native-looking iOS and Android apps with the same code base.</div>
                <div className="main-date">15/12</div>
            </div>
        </div>
    )
}

export default MainCard;