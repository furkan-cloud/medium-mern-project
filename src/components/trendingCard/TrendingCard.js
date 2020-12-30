import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./TrendingCard.css";
import UserContext from "../../context/UserContext";
import RegisterForm from "../registerForm/RegisterForm";

const TrendingCard = (props) => {
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
  return (
    <div className="trendingcard-container">
      <RegisterForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
      <Link

      >
        <div className="number-container">01</div>

        <div className="trendingtext-container">
          <Link
            onClick={(e) => {
              e.preventDefault();
              modalOpen();
            }} to={userData?.user?._id ? `/profileDetail/${props.authorId}` : "/"}
          >
            <div className="trendingusername">
              <img
                className="trendingProfileImage"
                src={props.profileImage}
              ></img>

              <div>{props.firstName}</div>
            </div>
          </Link>
          <Link to={userData?.user?._id ? `/articleDetail/${props.id}` : "/"}>
            <div className="trendingtitle">{props.title}</div>
          </Link>
          <div className="trendingdate">{props.date}</div>
        </div>
      </Link>
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
