import React from 'react';
import './MainCard.css';

const MainCard = () => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src='https://miro.medium.com/fit/c/376/282/0*SZ9hlfia03wfgsth.jpg' alt='' width="200" height="200" />
            </div>

            <div className="text-container">
                <div className="username">
                    <img src = 'https://miro.medium.com/fit/c/20/20/1*U6oowcH4fc_jKALXYqbtxQ.png'  width="10" height="10"></img>
                    Nur KOcar
                </div>

                <div className="title">10 Free React Native Courses for Beginners to Learn in 2021</div>
                <div>There is a huge demand for cross-platform app frameworks like React Native and Flutter which allows you to create native-looking iOS and Android apps with the same code base.</div>
                <div className="date">15/12</div>
            </div>



        </div>
    )
}

export default MainCard;