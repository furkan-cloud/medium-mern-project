import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "./TrendingCard.css";
import UserContext from "../../context/UserContext";
import RegisterForm from "../registerForm/RegisterForm";

const TrendingCard = (props) => {
  const history = useHistory();
  const {
    userData,
    openModal,
    closeModal,
    modalIsOpen,
    setIsOpen,
  } = useContext(UserContext);
  function modalOpen() {
    if (!userData?.user?._id) {
      setIsOpen(true);
    }
  }

  const handleOnClick = () => {
    userData?.user
      ? history.push(`/profileDetail/${props.authorId}`)
      : modalOpen();
  };

  const handleOnClickArticle = () => {
    userData?.user ? history.push(`/articleDetail/${props.id}`) : modalOpen();
  };

  return (
    <div className="trendingcard-container">
      <RegisterForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <div className="number-container">0{props.number + 1}</div>

      <div className="trendingtext-container">
        <div onClick={handleOnClick} className="trendingusername">
          <img className="trendingProfileImage" src={props.profileImage}></img>
          <div>{props.firstName + ' ' + props.lastName}</div>
        </div>
        <div onClick={handleOnClickArticle} className="trendingtitle">
          {props.title}
        </div>
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
