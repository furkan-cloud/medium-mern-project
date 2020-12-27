import React from "react";
import { Link } from 'react-router-dom';
import './TrendingCard.css';

const TrendingCard = (props) => {
  return (

    <div className="trendingcard-container">
      <div className="number-container">01</div>

      <div className="trendingtext-container">
        <Link to={`/profileDetail/${props.authorId}`}>
          <div className="trendingusername">

            <img className='trendingProfileImage' src={props.profileImage}></img>

            <div>{props.firstName}</div>
          </div>
        </Link>
        <Link
          to={`/articleDetail/${props.id}`}
        >
          <div className="trendingtitle">{props.title}</div>
        </Link>
        <div className="trendingdate">{props.date}</div>

      </div>

    </div>
  );
};

export default TrendingCard;

// id={article?._id}
// firstName={article?.author.firstName}
// title={article?.title}
// profileImage = {article?.author.avatar_img}
// date={article?.createdAt}
// key={index}
