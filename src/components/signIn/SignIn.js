import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/UserContext";
import Modal from "react-modal";
import "./SignIn.css";

const SignInForm = ({ openSignInModal, signInModalIsOpen }) => {
  const history = useHistory();
  const {
    setUserData,
    openModal,
    userData,
    setAuthToken,
    authToken,
  } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateClick = () => {
    openSignInModal();
    openModal();
  };

  const handleOnClick = async (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
    };

    const signResponse = await axios.post(
      "http://localhost:5000/api/auth/login",
      newUser
    );
    setUserData({
      user: signResponse?.data?.user,
      token: signResponse?.data?.access_token,
    });
    localStorage.setItem("token", signResponse?.data?.access_token);
    const userResponse = await axios.get(
      "http://localhost:5000/api/auth/user",
      { headers: { "x-auth-token": signResponse.data.access_token } }
    );
    // setUserData({
    //   user: userResponse?.data?.user,
    //   token: signResponse.data.access_token,
    // });

    history.push("/");
    openSignInModal();
  };

  return (
    <div>
      {/* <RegisterForm /> */}
      <Modal
        isOpen={signInModalIsOpen}
        onRequestClose={openSignInModal}
        style={customStyles}
      >
        <form className="signInForm">
          <div className="signInContainer">
            <label>Email :</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="signInInput"
            />
          </div>
          <div className="signInContainer">
            <label>Password :</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="signInInput"
            />
          </div>
          <button onClick={handleOnClick} className="modalSignIn">
            Sign In
          </button>
          <p>
            {" "}
            No account?
            <span
              style={{ color: "#1a8917", cursor: "pointer" }}
              onClick={handleCreateClick}
            >
              Create one
            </span>
          </p>
        </form>
      </Modal>
    </div>
  );
};

// No account? Create one

export default SignInForm;

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
