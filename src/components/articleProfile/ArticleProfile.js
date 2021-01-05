import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext";
import "./ArticleProfile.css";

const ArticleProfile = ({ author, formatDate }) => {
  const history = useHistory();
  const { userData, modalOpen } = useContext(UserContext);
  const handleOnClick = () => {
    userData?.user ? history.push(`/profileDetail/${author._id}`) : modalOpen();
  };
  return (
    <div className="articleProfileContainer">
      <div onClick={handleOnClick} className="articleProfileLink">
        <div>
          <img
            className="articleProfileImage"
            src={author?.avatar_img}
            alt=""
          />
        </div>
        <div className="articleProfileUsername">
          <span>{author?.firstName}</span>
          <span>{author?.lastName}</span>
        </div>
      </div>
      <div className="articleDate">{formatDate}</div>
    </div>
  );
};

export default ArticleProfile;
