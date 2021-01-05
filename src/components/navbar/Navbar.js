import React, { useContext, useState } from "react";

import UserContext from "../../context/UserContext";
import "./Navbar.css";

import { Link } from "react-router-dom";
import Search from "../icons/Search";

import DoubleBookmark from "../icons/DoubleBookmark";
import Alarm from "../icons/Alarm";
import ProfileListModal from "../profileListModal/ProfileListModal";

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

  const [showModal, setShowModal] = useState(false);

  const handleOnClick = () => {
    setShowModal(!showModal);
  };

  const { userData } = useContext(UserContext);

  return (
    <div className="container">
      <div className="containerLeft">
        <Link to="/">
          <img
            className="navbarImage"
            src="https://miro.medium.com/max/8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt=""
          />
        </Link>
        <h1 className="headerLeft">{greeting()}</h1>
      </div>

      <div className="containerRight">
        {/* <h1>Good Afternoon</h1> */}
        {/* <FontAwesomeIcon icon={fa-search} /> */}
        {/* <i style={{fontSize:15}} className="fas fa-search"></i> */}
        <Search id="navbar-icons" />
        <DoubleBookmark  id="navbar-icons" />
        <Alarm id="navbar-icons"  />
        <Link to={"/posts/add"}>
          <button className="navbar-button">Add Article</button>
        </Link>
        <div className="navbarProfileImageContainer" onClick={handleOnClick}>
          <img
            className="navbar-profileImage"
            src={userData?.user?.avatar_img}
            alt=""
          />
          {showModal && <ProfileListModal />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
