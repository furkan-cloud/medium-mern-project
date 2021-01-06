import React from "react";
import { useHistory } from "react-router-dom";
import "./Avatar.css";

const Avatar = ({ firstName, lastName, profileImage, id, ...props }) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/profileDetail/${id}`);
  };
  return (
    <div className="avatarContainer">
      <div style={{ cursor: "pointer" }} onClick={handleOnClick}>
        <img className="avatarImage" src={profileImage} alt="" />
        <p style={{ fontSize: 11 }}>{firstName + " " + lastName}</p>
      </div>
    </div>
  );
};

export default Avatar;

// to={`/profileDetail/${id}`}
