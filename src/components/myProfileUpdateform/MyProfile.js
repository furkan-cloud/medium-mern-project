import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import Media from "../icons/Media";
import "./MyProfileUpdateForm.css";

const MyProfileUpdateForm = ({ handleOnUpdateClose = () => {} }) => {
  const { userData, setUserData } = useContext(UserContext);
  const [firstName, setFirstName] = useState(userData.user.firstName);
  const [lastName, setlastName] = useState(userData.user.lastName);
  const [email, setEmail] = useState(userData.user.email);
  //const [password, setPassword] = useState(userData.user.password);
  const [imgAvatar, setImgAvatar] = useState(null);
  const handleAvatarChange = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files[0]) {
      setImgAvatar(e.target.files[0]);
    }
  };
  const handleOnClick = async (e) => {
    e.preventDefault();
    // const updatedUser = {
    //   firstName,
    //   lastName,
    //   email,
    //   password,
    // };
    const ProfilFormData = new FormData();
    ProfilFormData.append("firstName", firstName);
    ProfilFormData.append("lastName", lastName);
    ProfilFormData.append("email", email);
    ProfilFormData.append("avatar_img", imgAvatar);

    let token = localStorage.getItem("token");

    const registerResponse = await axios.put(
      "http://localhost:5000/api/profile/update",
      ProfilFormData,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    //console.log(registerResponse.data.user);
    setUserData({ ...userData, user: registerResponse.data.user });
    handleOnUpdateClose();

    // localStorage.setItem("token", registerResponse.data.access_token)
  };
  return (
    <div className="profileFormContainer">
      <img className="myProfileAvatar" src={userData?.user?.avatar_img}></img>
      <form className="profileForm" enctype="multipart/form-data" action="">
        <div className="profileFormInputContainer">
          <label className="imageUpload" htmlFor="avatar_img">
            <button
              style={{ pointerEvents: "none" }}
              // onClick={() => alert("MEDİA ADD")}
            >
              <Media />
            </button>
          </label>
          <input
            id="avatar_img"
            accept="image/*"
            type="file"
            name="avatar_img"
            onChange={handleAvatarChange}
            style={{ display: "none" }}
          />
        </div>
        <div className="profileFormInputContainer">
          <label className="profile-input-label">First Name :</label>
          <input
            value={firstName}
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="profileFormInputContainer">
          <label className="profile-input-label">Last Name :</label>
          <input
            value={lastName}
            type="text"
            name="lastName"
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="profileFormInputContainer">
          <label className="profile-input-label">Email :</label>
          <input
            value={email}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <div className="profileFormInputContainer">
          <label className="profile-input-label">Password :</label>
          <input
            value={password}
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}

        <button type="submit" onClick={handleOnClick} className="update-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default MyProfileUpdateForm;
