import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import axios from "axios";
import "./MyProfileUpdateForm.css";

const MyProfileUpdateForm = ({ handleOnUpdateClose = () => { } }) => {
  const { userData, setUserData } = useContext(UserContext);
  const [firstName, setFirstName] = useState(userData.user.firstName);
  const [lastName, setlastName] = useState(userData.user.lastName);
  const [email, setEmail] = useState(userData.user.email);

  const handleOnClick = async (e) => {
    e.preventDefault();
    const updatedUser = {
      firstName,
      lastName,
      email,
    };

    let token = localStorage.getItem("token");

    const registerResponse = await axios.put(
      "/api/profile/update",
      updatedUser,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    setUserData({ ...userData, user: registerResponse.data.user });
    handleOnUpdateClose();
  };
  return (
    <div className="profileFormContainer">
      <img
        className="profileFormAvatar"
        src={userData?.user?.avatar_img}
        alt=""
      ></img>
      <form className="profileForm">
        <div className="profileFormInputContainer">
          <label className="profile-input-label">First Name :</label>
          <input
            className="profileUpdateInput"
            value={firstName}
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="profileFormInputContainer">
          <label className="profile-input-label">Last Name :</label>
          <input
            className="profileUpdateInput"
            value={lastName}
            type="text"
            name="lastName"
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div className="profileFormInputContainer">
          <label className="profile-input-label">Email :</label>
          <input
            className="profileUpdateInput"
            value={email}
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" onClick={handleOnClick} className="update-btn">
          Update
        </button>
      </form>
    </div>
  );
};

export default MyProfileUpdateForm;
