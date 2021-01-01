import "./DetailSectionLeft.css";
import Claps from "../icons/Claps";
import Comment from "../icons/Comment"
import Bookmark from "../icons/Bookmark";
import axios from "axios";
import { useLayoutEffect, useState } from "react";

const DetailSectionLeft = ({ singleArticle }) => {
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
    <div className="articleDetailLeft">
      <div className="position">
        <div className="line">
          <div>Written By</div>
          <div className="writer">
            {singleArticle?.author?.firstName +
              " " +
              singleArticle?.author?.lastName}
          </div>
          <div className="left-button-container">
            <button className="left-button">Following</button>
          </div>
        </div>
        <hr />
        <div className="icons-container">
          <div onClick={handleClaps} className="icons">
            <Claps />
            <div className="applause">{claps}</div>
          </div>
          <div className="icons">
            <Comment/>
          </div>

          <div className="icons">
            <Bookmark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSectionLeft;
/*deneme*/
