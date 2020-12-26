import React, { useContext } from "react";
import ReactDOM from "react-dom";
import UserContext from '../../context/UserContext'
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBookmark,
  faUserCircle,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Search from "../icons/Search";
import Bookmark from "../icons/Bookmark";
import DoubleBookmark from "../icons/DoubleBookmark";
import Alarm from "../icons/Alarm";
// import { checkSquare } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  function greeting() {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      return "Good morning";
    } else if (curHr < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }

  const { userData } = useContext(UserContext)

  return (
    <div className="container">
      <div className="containerLeft">
        <Link
          to = '/'
        >
          <img
            className="navbarImage"
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
          />
        </Link>
        <h1 className="headerLeft">{greeting()}</h1>
      </div>

      <div className="containerRight">
        {/* <h1>Good Afternoon</h1> */}
        {/* <FontAwesomeIcon icon={fa-search} /> */}
        {/* <i style={{fontSize:15}} className="fas fa-search"></i> */}
        <Search />
        <DoubleBookmark />
        <Alarm />
        <Link to={"/posts/add"}>
          <button className="navbar-button">Add Article</button>
        </Link>
        <Link>
          <img className="navbar-profileImage" src={userData.user.avatar_img} />
        </Link>

      </div>
    </div>
  );
};

export default Navbar;
