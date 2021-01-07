import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import "./bigCard.css";
import axios from "axios";
import Bookmark from "../icons/Bookmark";
import BookmarkFill from "../icons/BookmarkFill";
import ThreeDots from "../icons/ThreeDots";
import UserContext from "../../context/UserContext";
import RegisterForm from "../registerForm/RegisterForm";

const BigCard = (props) => {
  const history = useHistory();
  const {
    userData,
    setUserData,
    closeModal,
    modalIsOpen,
    setIsOpen,
  } = useContext(UserContext);
  async function removeBookmark() {
    let token = localStorage.getItem("token");
    const undoLikeData = await axios.get(`/api/posts/${props.id}/undolike`, {
      headers: {
        "x-auth-token": token,
      },
    });
    setUserData({ user: undoLikeData.data.currentUser, token });
  }
  async function addBookmark() {
    let token = localStorage.getItem("token");
    const likeData = await axios.get(`/api/posts/${props.id}/like`, {
      headers: {
        "x-auth-token": token,
      },
    });
    setUserData({ user: likeData.data.currentUser, token });
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
          <img className="big-profileImage" src={props.profileImage} alt="" />
          <div>{props.username}</div>
        </div>
        <div onClick={handleOnClickArticle} className="big-card-header">
          <div className="big-card-title">{props.title}</div>
          <div className="big-card-desc">
            {ReactHtmlParser(props.description.slice(0, 100))}
          </div>
        </div>
        <div className="date-icons">
          <div className="big-card-date">{props.date}</div>
          <div className="big-card-icons">
            {props.likes.includes(userData?.user?._id) ? (
              <div onClick={removeBookmark}>
                <BookmarkFill />
              </div>
            ) : (
              <div onClick={addBookmark}>
                <Bookmark />
              </div>
            )}
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
