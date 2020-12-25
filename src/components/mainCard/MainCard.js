import React, {useContext} from 'react';
import ReactHtmlParser from "react-html-parser";
import './MainCard.css';
import UserContext from '../../context/UserContext';

const MainCard = () => {
    const { articles } = useContext(UserContext);
    console.log(articles);
    return (
        <div className="maincard-container">
            <div className="main-image-container">
                <img className="main-image" src={articles && articles[0]?.post_image} alt='' />
            </div>
            <div className="main-text-container">
                <div className="main-username">
                    <img src = {articles && articles[0]?.author.avatar_img}  width="20" height="20"></img>
                    {articles && articles[0]?.author.firstName + articles && articles[0]?.author.lastName}
                </div>

                <div className="main-title">{articles && articles[0]?.title}</div>
                <div>{articles && ReactHtmlParser(articles[0]?.content.slice(0,400))}</div>
                <div className="main-date">{articles && articles[0]?.createdAt}</div>
            </div>
        </div>
    )
}

export default MainCard;