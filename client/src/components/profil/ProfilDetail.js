import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProfilDetail.css";
import ArticleDetailCard from "../articleDetailCard/ArticleDetailCard";
import UserContext from "../../context/UserContext";

const ProfilDetail = () => {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const { userData, setUserData } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const userProfileData = await axios.get(`/api/users/${id}`);
      setUserProfile(userProfileData?.data?.data);
    };
    fetchUser();
  }, [userData?.user?.followingCount, id]);

  async function removeFollow() {
    let token = localStorage.getItem("token");
    const unFollowProfileData = await axios.get(`/api/users/unfollow/${id}`, {
      headers: {
        "x-auth-token": token,
      },
    });
    setUserData({ user: unFollowProfileData?.data?.data, token });
  }

  async function addFollow() {
    let token = localStorage.getItem("token");
    const followProfileData = await axios.get(`/api/users/follow/${id}`, {
      headers: {
        "x-auth-token": token,
      },
    });
    setUserData({ user: followProfileData?.data?.data, token });
  }

  return (
    <div className="profil__card__container">
      <div className="profil__card__header">
        <div className="profil__card__username">
          <h2>{userProfile?.firstName}</h2>
        </div>

        <div>
          {userData?.user?.following?.filter((fol) => fol._id == id).length >
          0 ? (
            <button
              onClick={removeFollow}
              className="profil__card__subheader__following__btn"
            >
              <span>Following</span>
            </button>
          ) : (
            <button
              onClick={addFollow}
              className="profil__card__subheader__follow__btn"
            >
              <span>Follow</span>
            </button>
          )}

          <Link>
            <span className="profil__card__followers">
              {" "}
              {userProfile?.followersCount} Followers
            </span>
          </Link>
        </div>
      </div>
      <div className="profil__card__content">
        <div className="profil__card__content__left">
          <div>
            <img src={userProfile?.avatar_img} alt="userImage" />
          </div>

          <div className="profil__card__content__left__info">
            <p className="info_text">ABOUT</p>
            <p className="info_text">
              {userProfile?.firstName + userProfile?.lastName}
            </p>
            <p className="info_text">{userProfile?.email}</p>
          </div>
        </div>
        <div
          className="
          profil__card__content__right"
        >
          {userProfile?.posts.map((post, index) => (
            <ArticleDetailCard
              singleArticle={post}
              // id={content._id}
              //   date={content.formatDate}
              //   title={content.title}
              //   articleText={content.content}
              //   imageUrl={content.post_image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilDetail;
