import React, { useState, useContext, useLayoutEffect } from "react";
import "./ArticleDetailCard.css";
import Claps from "../icons/Claps";
import Bookmark from "../icons/Bookmark";
import BookmarkFill from "../icons/BookmarkFill";
import ReactHtmlParser from "react-html-parser";
import Comment from "../icons/Comment";
import Upload from "../icons/Upload";
import axios from "axios";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

const ArticleDetailCard = ({ singleArticle }) => {
  const [claps, setClaps] = useState(singleArticle?.claps);
  const { userData, setUserData } = useContext(UserContext);

  async function removeBookmark() {
    let token = localStorage.getItem("token");
    const undoLikeData = await axios.get(
      `/api/posts/${singleArticle._id}/undolike`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );

    setUserData({ user: undoLikeData.data.currentUser, token });
  }

  async function addBookmark() {
    let token = localStorage.getItem("token");
    const likeData = await axios.get(`/api/posts/${singleArticle._id}/like`, {
      headers: {
        "x-auth-token": token,
      },
    });

    setUserData({ user: likeData.data.currentUser, token });
  }

  const handleClaps = async () => {
    let token = localStorage.getItem("token");
    const getClaps = await axios.get(`/api/posts/${singleArticle?._id}/claps`, {
      headers: { "x-auth-token": token },
    });
    setClaps(getClaps.data?.data.claps);
  };

  useLayoutEffect(() => {
    setClaps(singleArticle?.claps);
  }, [singleArticle?.claps]);

  // console.log('likes ', singleArticle?.likes);

  return (
    <div className="article-detail-container">
      <p>{singleArticle?.formatDate}</p>
      <Link to={`/articleDetail/${singleArticle._id}`}>
        <h1>{singleArticle?.title}</h1>
      </Link>

      <img
        className="articleDetailImage"
        src={singleArticle?.post_image}
        alt=""
      />
      <p>{ReactHtmlParser(singleArticle?.content.slice(0, 500))}</p>
      <Link to={`/articleDetail/${singleArticle._id}`}>
        <p className="readMore">Read more...</p>
      </Link>
      <div className="all-icons">
        <div className="all-icons-left">
          <Claps onClick={handleClaps} /> {claps}
          <Comment />
        </div>
        <div className="all-icons-right">
          {userData?.user?.readingList.filter(
            (read) => read?._id == singleArticle?._id
          ).length > 0 ? (
            <div onClick={removeBookmark}>
              <BookmarkFill />
            </div>
          ) : (
            <div onClick={addBookmark}>
              <Bookmark />
            </div>
          )}
          <div>
            <Upload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailCard;
