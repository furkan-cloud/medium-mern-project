import React, { useState, useLayoutEffect } from "react";
import "./ArticleDetailCard.css";
import Claps from "../icons/Claps";
import Bookmark from "../icons/Bookmark";
import ReactHtmlParser from "react-html-parser";
import Comment from "../icons/Comment";
import Upload from "../icons/Upload";
import axios from "axios";

const ArticleDetailCard = ({ singleArticle }) => {
  const [claps, setClaps] = useState(singleArticle?.claps);

  const handleClaps = async () => {
    let token = localStorage.getItem("token");
    const getClaps = await axios.get(
      `http://localhost:5000/api/posts/${singleArticle?._id}/claps`,
      { headers: { "x-auth-token": token } }
    );
    console.log(getClaps.data);
    setClaps(getClaps.data?.data.claps);
  };

  useLayoutEffect(() => {
    setClaps(singleArticle?.claps);
  }, [singleArticle?.claps]);

  return (
    <div className="article-detail-container">
      <p>{singleArticle?.formatDate}</p>
      <h1>{singleArticle?.title}</h1>
      <img className="articleDetailImage" src={singleArticle?.post_image} />
      <p>{ReactHtmlParser(singleArticle?.content)}</p>
      {/* <a href="/articleDetails">{singleArticle?.readTime}</a> */}
      <div className="all-icons">
        <div className="all-icons-left">
          <Claps onClick={handleClaps} /> {claps}
          <Comment />
        </div>
        <div className="all-icons-right">
          <Bookmark />
          <Upload />
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailCard;
