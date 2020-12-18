import React from "react";
import './ReadingCard.css';

const ReadingCard = (props) => {
  return (  
    <div className="readingcard-container">
      <div className="readingtext-container">
      <div className="readingusername">
        <img className="readingProfileImage" src={props.profileImage}/>
        <div>{props.username}</div>
        </div>
        <div className="readingtitle">{props.title}</div>
        <div className="readingdate">{props.date}</div>
      </div>
    </div>
  );
};

export default ReadingCard;
