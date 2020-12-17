import React from "react";
import './TrendingCard.css';

const TrendingCard = (props) => {
  return (
    <div className="trendingcard-container">
      <div className="number-container">1</div>

      <div className="trendingtext-container">
        <div className="trendingusername">
          <a href="">{props.userprofile}</a>
          {props.username}
        </div>
        <div className="trendingtitle">{props.title}</div>
        <div className="trendingdate">{props.date}</div>
      </div>
    </div>
  );
};

export default TrendingCard;
