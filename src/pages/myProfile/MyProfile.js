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
  const [disabled, setDisabled] = useState(null);

  const { userData, setUserData } = useContext(UserContext);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const handleAvatarChange = (e) => {
    if (e.target.files[0]) {
      setImgAvatar(e.target.files[0]);
      setDisabled(true);
    }
  };

  useEffect(() => {
    const fechProfilInfo = async () => {
      let token = localStorage.getItem("token");
      if (token) {
        const userResponse = await axios.get(
          "http://localhost:5000/api/profile",
          { headers: { "x-auth-token": token } }
        );
        setUserProfile(userResponse.data.user);
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
  const handleOnClick = async (e) => {
    e.preventDefault();

    const ProfilFormData = new FormData();

    ProfilFormData.append("avatar_img", imgAvatar);

    let token = localStorage.getItem("token");

    const registerResponse = await axios.post(
      "http://localhost:5000/api/profile/upload",
      ProfilFormData,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    setUserData({ ...userData, user: registerResponse.data.user });
  };

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
          <img
            className="myProfileAvatar"
            src={userProfile?.avatar_img}
            alt="avatar"
          />
          <form action="" enctype="multipart/form-data">
            <label htmlFor="avatar_img">
              <div
                className="avatarUploadBtn"
                // style={{ pointerEvents: "none" }}
                // onClick={() => alert("MEDİA ADD")}
              >
                <Media />
              </div>
              <input
                id="avatar_img"
                accept="image/*"
                type="file"
                name="avatar_img"
                // ref={hiddenFileInput}
                onChange={handleAvatarChange}
                style={{ display: "none" }}
              />
            </label>
            {!disabled ? (
              <span style={{ fontWeight: "bold" }}>Select İmage</span>
            ) : (
              <button className="edit_image_btn" onClick={handleOnClick}>
                Edit Profile İmage
              </button>
            )}
          </form>
        </div>
        <div className="myProfileHeaderFollowContainer">
          <div className="myProfileHeaderFollow">
            <div className="myProfileHeaderContent">
              <span>
                {userProfile?.firstName + " " + userProfile?.lastName}
              </span>
            </div>

            <div className="myProfileHeaderContent">
              Followers {userProfile?.followersCount}
            </div>
            <div className="myProfileHeaderContent">
              Following {userProfile?.followingCount}
            </div>
            <div className="myProfileHeaderContent">
              Articles {userProfile?.posts?.length}
            </div>
          </div>
          <div>
            <button className="edit_profile_btn" onClick={handleOnUpdateOpen}>
              Edit Profile
            </button>
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
              delete = {true}
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
    width: "35%",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
