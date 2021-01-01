import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "./BigCard.css";
import axios from "axios";
import Bookmark from "../icons/Bookmark";
import BookmarkFill from "../icons/BookmarkFill";
import ThreeDots from "../icons/ThreeDots";
import UserContext from "../../context/UserContext";
import RegisterForm from "../registerForm/RegisterForm";

const BigCard = (props) => {
  const history = useHistory();
  const {
    articles,
    setArticles,
    userData,
    setUserData,
    openModal,
    closeModal,
    modalIsOpen,
    setIsOpen,
  } = useContext(UserContext);
  const [isLike, setIsLike] = useState(
    props.likes.includes(userData?.user?._id)
  );

  async function removeBookmark() {
    let token = localStorage.getItem("token");
    const undoLikeData = await axios.get(
      `http://localhost:5000/api/posts/${props.id}/undolike`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    console.log(undoLikeData.data);
    setIsLike(false);
  }

  async function addBookmark() {
    let token = localStorage.getItem("token");
    const likeData = await axios.get(
      `http://localhost:5000/api/posts/${props.id}/like`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    console.log(likeData.data);
    setIsLike(true);
  }

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
    <div className="bigcard-container">
      <div className="bigtext-container">
        <RegisterForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
        <div onClick={handleOnClick} className="big-username">
          <img className="big-profileImage" src={props.profileImage} />
          <div>{props.username}</div>
        </div>
        <div onClick={handleOnClickArticle} className="big-card-header">
          <div className="big-card-title">{props.title}</div>
          <div className="big-card-desc">
            {ReactHtmlParser(props.description.slice(0, 150))}
          </div>
        </div>
        <div className="date-icons">
          <div className="big-card-date">{props.date}</div>
          <div className="big-card-icons">
            <div onClick={isLike ? removeBookmark : addBookmark}>
              {isLike ? <BookmarkFill /> : <Bookmark />}
            </div>
            <ThreeDots />
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
