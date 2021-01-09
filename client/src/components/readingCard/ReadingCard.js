import React, { useContext } from "react";
import "./ReadingCard.css";
import { useHistory } from "react-router-dom";

const ReadingCard = (props) => {
  const history = useHistory();
  const handleOnClickArticle = () => {
    history.push(`/articleDetail/${props.id}`)
  };
  const handleOnClick = () => {
      history.push(`/profileDetail/${props.authorId}`)
  };
  return (
    <div className="readingcard-container">
      <div className="readingtext-container">
        <div onClick={handleOnClick} className="readingusername">
          <img
            className="readingProfileImage"
            src={props.profileImage}
            alt=""
          />
          <div>{props.firstName + " " + props.lastName}</div>
        </div>
        <div onClick={handleOnClickArticle} className="readingtitle">{props.title}</div>
        <div className="readingdate">{props.date}</div>
      </div>
    </div>
  );
};

export default ReadingCard;
