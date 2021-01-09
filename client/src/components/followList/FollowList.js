import React, { useContext } from "react";
import Avatar from "../latestFromFollowing/Avatar";
import { Link } from "react-router-dom";
import "./FollowList.css";
import UserContext from "../../context/UserContext";

const FollowList = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className="followListContainer">
      {userData?.user?.following?.length > 0 ? (
        <>
          <h3 className="followingHeader">LATEST FROM FOLLOWING</h3>
          <div className="avatarContainer">
            {userData?.user?.following?.slice(0, 8).map((followed) => (
              <Avatar
                key={followed?._id}
                id={followed?._id}
                profileImage={followed?.avatar_img}
                firstName={followed?.firstName}
                lastName={followed?.lastName}
              />
            ))}
          </div>
          <Link style={{ color: "#1a8917", textDecoration: "none" }} to="/">
            All from following
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default FollowList;
