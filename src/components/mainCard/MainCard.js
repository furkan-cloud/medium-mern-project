import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "./MainCard.css";
import UserContext from "../../context/UserContext";

const MainCard = () => {
  const { articles } = useContext(UserContext);
  return (
    <div className="maincard-container">
      <div className="main-image-container">
        <img
          className="main-image"
          src={articles && articles[0]?.post_image}
          alt=""
        />
      </div>
      <div className="main-text-container">
        <Link to={`/profileDetail/${articles && articles[0]?.author._id}`}>
          <div className="main-username">
            <img
              className="mainCardProfileImage"
              src={articles && articles[0]?.author.avatar_img}
              width="20"
              height="20"
              alt=""
            ></img>
            <span>
              {(articles && articles[0]?.author?.firstName) +
                " " +
                (articles && articles[0]?.author?.lastName)}
            </span>
          </div>
        </Link>
        <Link
          to={`/articleDetail/${articles && articles[0]?._id}`}
          className="big-link"
        >
          <div className="main-title">{articles && articles[0]?.title}</div>
          <div>
            {articles && ReactHtmlParser(articles[0]?.content.slice(0, 400))}
          </div>
        </Link>
        <div className="main-date">{articles && articles[0]?.formatDate}</div>
      </div>
    </div>
  );
};

export default MainCard;
