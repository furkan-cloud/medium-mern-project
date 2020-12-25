import React, {useContext} from 'react';
import './MainCard.css';
import UserContext from '../../context/UserContext';

const MainCard = () => {
    const { articles } = useContext(UserContext);
    console.log(articles);
    return (
        <div className="maincard-container">
            <div className="main-image-container">
                <img className="main-image" src={articles[0][0]?.post_image} alt='' />
            </div>
            <div className="main-text-container">
                <div className="main-username">
                    <img src = {articles[0]?.author.avatar_img}  width="20" height="20"></img>
                    {articles[3]?.author.firstName + articles[0]?.author.lastName}
                </div>

                <div className="main-title">{articles[0]?.title}</div>
                <div>{articles[0]?.content}</div>
                <div className="main-date">{articles[0]?.createdAt}</div>
            </div>
        </div>
    )
}

export default MainCard;