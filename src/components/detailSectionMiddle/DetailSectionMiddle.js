import ArticleProfile from "../../components/articleProfile/ArticleProfile";
import "./DetailSectionMiddle.css";
import ReactHtmlParser from "react-html-parser";
import Upload from "../icons/Upload";
import Bookmark from "../icons/Bookmark";
import BookmarkFill from "../icons/BookmarkFill";
import ThreeDots from "../icons/ThreeDots";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";

const DetailSectionMiddle = ({ singleArticle }) => {
  const { userData, setUserData } = useContext(UserContext);

  async function removeBookmark() {
    let token = localStorage.getItem("token");
    const undoLikeData = await axios.get(
      `http://localhost:5000/api/posts/${singleArticle._id}/undolike`,
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
    const likeData = await axios.get(
      `http://localhost:5000/api/posts/${singleArticle._id}/like`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );

    setUserData({ user: likeData.data.currentUser, token });
  }

  return (
    <div className="articleDetailMiddle">
      <h1 className="articleTitle">{singleArticle?.title}</h1>
      <div className="articleDetailMiddleProfile">
        <ArticleProfile
          formatDate={singleArticle?.formatDate}
          author={singleArticle?.author}
        />
        <div className="middle_icons">
          <Upload />
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
          <ThreeDots />
        </div>
      </div>
      <img
        className="articleMainImage"
        src={singleArticle?.post_image}
        alt=""
      />
      <div className="articleDetailMiddleContent">
        {ReactHtmlParser(singleArticle?.content)}
      </div>
    </div>
  );
};

export default DetailSectionMiddle;
