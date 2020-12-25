import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "./BigCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const BigCard = (props) => {
  return (
    <div className="bigcard-container">
      <div className="bigtext-container">
        <Link to={`/profileDetail/${props.authorId}`} className="big-link">
          <div className="big-username">
            <img className="big-profileImage" src={props.profileImage} />
            <div>{props.username}</div>
          </div>
        </Link>
        <Link to={`/articleDetail/${props.id}`} className="big-link">
          <div className="big-card-title">{props.title}</div>
          <div className="big-card-desc">
            {ReactHtmlParser(props.description.slice(0,150))}
          </div>
        </Link>
        <div className="date-icons">
          <div className="big-card-date">{props.date}</div>
          <div className="big-card-icons">
            <FontAwesomeIcon
              icon={faBookmark}
              size="1x"
              style={{ paddingRight: 10 }}
            />
            <FontAwesomeIcon icon={faEllipsisH} size="1x" />
          </div>
        </div>
      </div>

      <div className="big-image-container">
        <img className="big-card-image" src={props.imageUrl} alt="" />
      </div>
    </div>
  );
};

export default BigCard;

// TODO: date fns ile date formatla
