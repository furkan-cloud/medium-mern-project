import "./DetailSectionLeft.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBookmark,
  faUserCircle,
  faBalanceScaleRight,
  faComment,
  faSignLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Claps from "../icons/Claps";
import Comment from "../icons/Comment";

const DetailSectionLeft = () => {
  return (
    <div className="articleDetailLeft">
     
     

      <div className="position">
        <div className="line">
          <div>Written By</div>
          <div className="writer">Faruk Cihan</div>
          <div className="left-button-container">
            <button className="left-button">Following</button>
          </div>
        </div>
        <hr />
        <div className="icons-container">
          <div className="icons">
           <Claps/>
            <div className="applause">200</div>
          </div>
          <div className="icons">
          <Comment/>
           <div className="comment">20</div>
          </div>
          <div className="icons">
            <FontAwesomeIcon
              icon={faBookmark}
              style={{ color: "#bdbdbd" }}
              size="2x"
            /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSectionLeft;
/*deneme*/