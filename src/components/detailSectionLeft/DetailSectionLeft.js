import "./DetailSectionLeft.css";
import React, { useContext } from "react";
import Claps from "../icons/Claps";
import Comment from "../icons/Comment";
import axios from "axios";
import { useLayoutEffect, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";

const DetailSectionLeft = ({ singleArticleLeft }) => {
  // const { id } = useParams();
  const [claps, setClaps] = useState(singleArticleLeft?.claps);
  const [userProfile, setUserProfile] = useState(null);
  const { userData, setUserData } = useContext(UserContext);

  console.log("singleArticleLeft", singleArticleLeft);

  async function removeFollow() {
    let token = localStorage.getItem("token");
    const unFollowProfileData = await axios.get(
      `http://localhost:5000/api/users/unfollow/${singleArticleLeft?.author?._id}`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    setUserData({ user: unFollowProfileData?.data?.data, token });
  }

  async function addFollow() {
    let token = localStorage.getItem("token");
    const followProfileData = await axios.get(
      `http://localhost:5000/api/users/follow/${singleArticleLeft?.author?._id}`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    setUserData({ user: followProfileData?.data?.data, token });
  }

  const handleClaps = async () => {
    let token = localStorage.getItem("token");
    const getClaps = await axios.get(
      `http://localhost:5000/api/posts/${singleArticleLeft?._id}/claps`,
      { headers: { "x-auth-token": token } }
    );

    setClaps(getClaps.data?.data.claps);
  };

  useLayoutEffect(() => {
    setClaps(singleArticleLeft?.claps);
  }, [singleArticleLeft?.claps]);

  useEffect(() => {
    const fetchUser = async () => {
      const userProfileData = await axios.get(
        `http://localhost:5000/api/users/${singleArticleLeft?.author?._id}`
      );
      setUserProfile(userProfileData?.data?.data);
    };
    fetchUser();
  }, [userData?.user?.followingCount, singleArticleLeft?.author?._id]);

  return (
    <div className="articleDetailLeft">
      <div className="position">
        <div className="line">
          <div>Written By</div>
          <div className="writer">
            {singleArticleLeft?.author?.firstName +
              " " +
              singleArticleLeft?.author?.lastName}
          </div>
          {userData?.user?.following?.filter(
            (fol) => fol._id == singleArticleLeft?.author?._id
          ).length > 0 ? (
            <div className="left-button-container">
              <button onClick={removeFollow} className="left-button-following">
                Following
              </button>
            </div>
          ) : (
            <div className="left-button-container">
              <button onClick={addFollow} className="left-button-follow">
                Follow
              </button>
            </div>
          )}
        </div>
        <hr />
        <div className="icons-container">
          <div onClick={handleClaps} className="icons">
            <Claps />
            <div className="applause">{claps}</div>
          </div>
          <div className="icons">
            <Comment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSectionLeft;
