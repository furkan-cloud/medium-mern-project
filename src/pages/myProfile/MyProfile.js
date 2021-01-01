import { useContext, useEffect, useState } from "react";
import UserContext from "../../context/UserContext";
import Modal from "react-modal";
import axios from "axios";
import Card from "../../components/card/Card";
import "./MyProfile.css";
import MyProfileUpdateForm from "../../components/myProfileUpdateform/MyProfile";
import Media from "../../components/icons/Media";

const MyProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [imgAvatar, setImgAvatar] = useState(null);

  const { userData } = useContext(UserContext);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const fechProfilInfo = async () => {
      let token = localStorage.getItem("token");
      if (token) {
        const userResponse = await axios.get(
          "http://localhost:5000/api/profile",
          { headers: { "x-auth-token": token } }
        );
        setUserProfile(userResponse.data.user);
        console.log(userResponse.data.user);
      }
    };
    fechProfilInfo();
  }, [userData]);

  const handleOnUpdateClose = () => {
    setShowProfileModal(false);
  };
  const handleOnUpdateOpen = () => {
    setShowProfileModal(true);
  };
  //   const handleAvatarChange = (e) => {
  //     if (e.target.files[0]) {
  //       console.log(e.target.files[0].name);
  //       setImgAvatar(e.target.files[0]);
  //     }
  //   };

  // localStorage.setItem("token", registerResponse.data.access_token)

  return (
    <div className="profileContainer">
      <Modal
        isOpen={showProfileModal}
        onRequestClose={handleOnUpdateClose}
        style={customStyles}
      >
        <MyProfileUpdateForm
          handleOnUpdateClose={handleOnUpdateClose}
          setShowProfileModal={setShowProfileModal}
          firstName={userProfile?.firstName}
          lastName={userProfile?.lastName}
          email={userProfile?.email}
          setUserProfile={setUserProfile}
        />
      </Modal>
      <div className="myProfileHeader">
        <div className="myProfileHeaderAvatarContainer">
          <img className="myProfileAvatar" src={userProfile?.avatar_img}></img>
          {/* <label htmlFor="avatar">
            <button
              style={{ pointerEvents: "none" }}
              // onClick={() => alert("MEDİA ADD")}
            >
              <Media />
            </button>
            <input
              id="avatar"
              accept="image/*"
              type="file"
              // ref={hiddenFileInput}
              onChange={handleAvatarChange}
              style={{ display: "none" }}
            />
          </label> */}
        </div>
        <div className="myProfileHeaderFollowContainer">
          <div>
            <span>{userProfile?.firstName + " " + userProfile?.lastName}</span>
          </div>
          <div>
            <div>Followers: {userProfile?.followersCount}</div>
            <div>Following: {userProfile?.followingCount}</div>
          </div>
          <div>
            <button onClick={handleOnUpdateOpen}>Edit Profile</button>
          </div>
        </div>
      </div>
      <div className="myProfileContent">
        <div className="myProfileContentLeft">
          <h3>Reading List</h3>
          {userProfile?.readingList?.map((readingCard, index) => (
            <Card
              id={readingCard?._id}
              authorId={readingCard?.author?._id}
              username={
                readingCard?.author?.firstName + readingCard?.author?.lastName
              }
              title={readingCard?.title}
              profileImage={readingCard?.author?.avatar_img}
              date={readingCard?.formatDate}
              imageUrl={readingCard?.post_image}
              key={index}
            />
          ))}
        </div>
        <div className="myProfileContentRight">
          <h3>Articles</h3>
          {userProfile?.posts?.map((post, index) => (
            <Card
              id={post?._id}
              authorId={post?.author?._id}
              username={post?.author?.firstName + post?.author?.lastName}
              title={post?.title}
              profileImage={post?.author?.avatar_img}
              date={post?.formatDate}
              imageUrl={post?.post_image}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

const customStyles = {
  content: {
    width: "50%",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
